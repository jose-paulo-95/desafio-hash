# Projeto de Testes E-commerce

Este projeto contém uma suíte completa de testes automatizados, incluindo testes funcionais, de API e performance.

## 🚀 Estrutura do Projeto

## 📋 Funcionalidades Testadas

- **Testes Web (E2E)**
  - Login e autenticação
  - Validação de campos obrigatórios
  - Mensagens de erro

- **Testes de API**
  - CRUD completo de Posts
  - Validações de contrato
  - Cenários de erro

- **Testes de Performance**
  - Teste de carga com 50 usuários simultâneos
  - Métricas de tempo de resposta
  - Thresholds de performance

## 🔧 Tecnologias Utilizadas

- Cypress - Testes E2E e API
- k6 - Testes de Performance

## 📦 Instalação e Execução

1. Clone o repositório
```bash
git clone [url-do-repositorio]
```

2. Instale as dependências
```bash
npm install
```

3. Execute os testes
```bash
# Testes E2E
npm run test:e2e

# Testes de API
npm run test:api

# Testes de Performance
npm run test:performance
```

## 📊 Reports

- Relatórios HTML dos testes de performance são gerados em `./report/test-api-load.html`
- Screenshots de falhas são armazenados em `cypress/screenshots`

## 🐛 Bugs Conhecidos

1. Erro na criação de posts via API
2. Falha na atualização de posts existentes

Para mais detalhes, consulte os relatórios de bugs em:
- docs/bug-report-criar-post.md
- docs/bug-report-atualizar-post.md

## 📝 Estratégia de Testes

Para informações detalhadas sobre a estratégia de testes, consulte `docs/estrategia-teste.md`