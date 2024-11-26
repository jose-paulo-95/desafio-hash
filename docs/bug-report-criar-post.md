## Título
Erro ao validar se realmente o post foi criado

## Descrição
A API retorna erro 400 (Bad Request) quando se tenta validar se o post foi criado.

## Passos para Reproduzir
1. Fazer requisição POST para /posts
2. Enviar payload com title, body e userId
3. Realizar requisição GET para /posts/{id} - com o id do post criado

## Resultado Esperado
- Status 201 (Created)
- Post criado com sucesso
- Dados do post retornados na resposta

## Resultado Atual 
- Status 400 (Bad Request)
- Post não é criado
- Erro na requisição

## Prioridade: ALTA
- Não esta criando o post
- Afeta funcionalidade core do sistema

## Evidências
![Testes de API Posts -- deve criar um post - BUG (failed).png](cypress\screenshots\post.cy.js\Testes de API Posts -- deve criar um novo post - BUG (failed).png)  
