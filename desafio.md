# Desafio QA

## Parte 1: Análise e Planejamento de Testes

### Identificação de Testes Prioritários
Dado o cenário descrito acima, liste:
- 5 casos de teste críticos para o fluxo "Login e recuperação de senha"
- 3 casos de teste não funcionais relevantes para um sistema de e-commerce

**Critérios de avaliação:**
- Cobertura de cenários reais
- Identificação de cenários críticos para a experiência do usuário e segurança

### Estratégia de Teste
Explique como você organizaria os testes funcionais e não funcionais. Considere prazos apertados e descreva:
- As ferramentas que usaria
- Prioridades para automação versus testes manuais

**Critérios de avaliação:**
- Clareza e viabilidade da estratégia
- Alinhamento com boas práticas de QA

## Parte 2: Automação de Testes

### Automação Prática
Use qualquer ferramenta de automação (Selenium, Cypress, Playwright, etc.) para criar um teste automatizado que:
1. Navegue até uma página de login (https://the-internet.herokuapp.com/login)
2. Realize as seguintes etapas:
   - Insira um e-mail inválido
   - Tente fazer login
   - Verifique se uma mensagem de erro específica aparece

**Entrega esperada:**
- Código-fonte do teste (em repositório Git ou enviado em um arquivo)
- Documentação breve explicando o funcionamento

**Critérios de avaliação:**
- Estrutura e clareza do código
- Uso eficiente da ferramenta escolhida
- Qualidade da validação

## Parte 3: Testes de API

### Teste Manual de API
Acesse a API pública de exemplo https://jsonplaceholder.typicode.com e:
1. Realize uma requisição GET no endpoint /posts
2. Valide o seguinte:
   - Status HTTP da resposta
   - Se a resposta contém uma lista de objetos
   - O primeiro objeto deve conter os campos userId, id, title, e body

**Entrega esperada:**
- Capturas de tela ou registros das requisições feitas (via Postman ou outra ferramenta)
- Resumo das validações realizadas

**Critérios de avaliação:**
- Capacidade de navegar e validar APIs
- Clareza na apresentação dos resultados

## Parte 4: Testes de Performance

### Teste Simples de Carga
Escolha uma ferramenta de performance (JMeter, k6, etc.) e crie um teste simples para o endpoint /posts da API citada.
Simule 50 requisições simultâneas em um período de 30 segundos e forneça:
- Tempo médio de resposta
- Percentil 90% do tempo de resposta
- Número de erros, se houver

**Entrega esperada:**
- Arquivo de configuração ou relatório do teste
- Resumo com os resultados

**Critérios de avaliação:**
- Configuração adequada do teste
- Interpretação dos resultados

## Parte 5: Soft Skills e Comunicação

### Análise de Bug
Imagine que, durante o teste, você encontrou um bug no sistema de recuperação de senha:
- A mensagem "E-mail enviado" aparece, mas o e-mail nunca é enviado
- Documente o bug no formato padrão (título, descrição, passos para reproduzir, resultado esperado, e resultado atual)
- Explique como você priorizaria esse bug em um sprint

**Critérios de avaliação:**
- Clareza e objetividade na documentação
- Habilidade para justificar a priorização

## Entrega Final
**Formato:** O candidato deve entregar todos os itens solicitados em um repositório Git ou em um único arquivo compactado (.zip), com estrutura organizada (pastas para automação, relatórios, etc.).

**Prazo sugerido:** 5 dias úteis.

## Critérios Gerais de Avaliação

### Cobertura e Qualidade dos Testes
- Identificação de cenários críticos e relevantes
- Profundidade e precisão das validações realizadas

### Habilidades Técnicas
- Proficiência no uso de ferramentas e na escrita de scripts de automação
- Capacidade de realizar testes de API e interpretar resultados de performance

### Comunicação
- Clareza e organização das entregas e documentações

### Solução de Problemas
- Estratégias usadas para priorizar e resolver problemas
