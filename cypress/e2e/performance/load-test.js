import http from "k6/http";
import { check, sleep } from "k6";
import { Counter, Gauge, Rate, Trend } from "k6/metrics";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";


const chamadas = new Counter("quantidade_de_chamadas");
const myGauge = new Gauge("tempo_bloqueado");
const myRate = new Rate("taxa_req_200");
const myTrend = new Trend("tempo_de_espera");
const tempoResposta = new Trend("tempo_resposta");
const erros = new Trend("erros");

export const options = {
  vus: 50, // 50 usuários virtuais simultâneos
  duration: "30s", // duração de 30 segundos
  thresholds: {
    http_req_failed: ["rate < 0.01"], // 1% das reqs podem ocorrrer erro
    http_req_duration: [
      { threshold: "p(90) < 2000", abortOnFail: true }, // 90% das reqs devem responder em ate 2s
      { threshold: "avg < 1500", abortOnFail: true }, // tempo médio de resposta deve ser menor que 1.5s
    ],
    checks: ["rate > 0.99"], // Personalizado para garantir que pelo menos 99% das respostas são 200
  },
};

export default function () {
  const responses = http.batch([
    ["GET", "https://jsonplaceholder.typicode.com/posts"],
    ["GET", "https://jsonplaceholder.typicode.com/posts/1"],
    ["GET", "https://jsonplaceholder.typicode.com/posts/1/comments"],
  ]);

  responses.forEach((res) => {
    const success = check(res, {
      "status code é 200": (r) => r.status === 200,
    });

    if (!success) {
      erros.add(1);
    }

    chamadas.add(1);
    myGauge.add(res.timings.blocked);
    myRate.add(res.status === 200);
    myTrend.add(res.timings.waiting);
    tempoResposta.add(res.timings.duration);
  });

  sleep(1);
}

export function handleSummary(data) {
  return {
    "./report/test-api-load.html": htmlReport(data),
  };
}
