# Projeto de Testes E-commerce

Este projeto contém uma suíte completa de testes automatizados e manuais, incluindo testes funcionais, de API e performance.

## 🚀 Estrutura do Projeto

## 📋 Funcionalidades Testadas

- **Testes Web (E2E)**
  - Login e autenticação
  - Validação de campos obrigatórios
  - Mensagens de erro

- **Testes de API**
  
  ### Testes Manuais (Postman)
  - CRUD completo de Posts
    - Listar todos os posts
    - Obter post específico por ID
    - Criar novo post
    - Atualizar post existente
  
  - **Validações Realizadas:**
    - Status codes (200, 201)
    - Tempo de resposta (< 1s)
    - Estrutura do contrato (campos userId, id, title, body)
    - Tipo dos dados retornados
    - Validação de arrays
    - Consistência dos dados enviados/recebidos
    - Persistência de IDs

  - **Cenários de Teste por Endpoint:**
    1. **GET /posts**
       - Verifica status code 200
       - Valida tempo de resposta menor que 1s
       - Confirma que resposta é um array não vazio
       - Valida estrutura dos posts retornados

    2. **GET /posts/{id}**
       - Verifica status code 200
       - Valida ID do post retornado
       - Confirma estrutura completa do post
       - Valida tipos de dados dos campos

    3. **POST /posts**
       - Verifica status code 201
       - Valida dados do post criado com dados enviados
       - Confirma geração de ID único
       - Verifica consistência dos campos

    4. **PUT /posts/{id}**
       - Verifica status code 200
       - Valida atualização correta dos dados
       - Confirma persistência do ID
       - Verifica consistência da resposta

  ### Testes Automatizados (Cypress)
  - **Suíte de Testes API**
    - Validação de contratos
    - Testes de integração
    - Cenários negativos
    - Validação de dados

- **Testes de Performance**
  - **Configurações de Carga:**
    - 50 usuários virtuais simultâneos
    - Duração de 30 segundos
    - Thresholds definidos para garantir qualidade

  - **Endpoints Testados em Batch:**
    - GET /posts
    - GET /posts/1
    - GET /posts/1/comments

  - **Métricas Coletadas:**
    - Quantidade total de chamadas
    - Tempo de bloqueio das requisições
    - Taxa de sucesso (requisições 200)
    - Tempo de espera
    - Tempo total de resposta
    - Contagem de erros

  - **Thresholds de Qualidade:**
    - Taxa de falha menor que 1% (rate < 0.01)
    - 90% das requisições abaixo de 2 segundos
    - Tempo médio de resposta menor que 1.5 segundos
    - Taxa de sucesso dos checks acima de 99%

  - **Validações por Requisição:**
    - Status code 200
    - Monitoramento de erros
    - Métricas de tempo de resposta
    - Tempo de bloqueio

  - **Reports Gerados:**
    - Relatório HTML detalhado com todas as métricas
    - Gráficos de performance
    - Estatísticas de execução
    - Localização: `./report/test-api-load.html`

## 🔧 Tecnologias Utilizadas

- Cypress - Testes E2E e API Automatizados
- Postman - Documentação e Testes Manuais de API
- k6 - Testes de Performance

## 📦 Instalação e Execução

1. Clone o repositório
```bash
git clone https://github.com/jose-paulo-95/desafio-hash
```

2. Instale as dependências
```bash
npm install
```

3. Execute os testes
```bash
# Testes E2E
npm run test:e2e

# Testes de API Automatizados
npm run test:api

# Testes de Performance
npm run test:performance
```

4. Para executar os testes manuais:
   - Importe a collection `Posts_API_Collection.json` no Postman
   - Execute os testes manualmente ou via Collection Runner

## 📊 Reports

- Relatórios HTML dos testes de performance são gerados em `./report/test-api-load.html`
- Screenshots de falhas são armazenados em `cypress/screenshots`
- Vídeos de falhas são armazenados em `cypress/videos`
- Evidências dos testes manuais de API:
  - `cypress/e2e/api/Manual/Evidences/GetAll/`
  - `cypress/e2e/api/Manual/Evidences/GetSpecific/`
  - `cypress/e2e/api/Manual/Evidences/Post/`
  - `cypress/e2e/api/Manual/Evidences/Put/`
- Reports dos testes automatizados são gerados após cada execução do Cypress

## 🌐 Endpoints Testados

Base URL: `https://jsonplaceholder.typicode.com`

- GET /posts - Lista todos os posts
- GET /posts/{id} - Obtém um post específico
- POST /posts - Cria um novo post
- PUT /posts/{id} - Atualiza um post existente

## 🐛 Bugs Conhecidos

1. Erro na criação de posts via API
2. Falha na atualização de posts existentes

Para mais detalhes, consulte os relatórios de bugs em:
- docs/bug-report-criar-post.md
- docs/bug-report-atualizar-post.md

## 📝 Estratégia de Testes

Para informações detalhadas sobre a estratégia de testes, consulte `docs/estrategia-teste.md`