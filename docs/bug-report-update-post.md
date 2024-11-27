## Título
Erro ao atualizar post existente

## Descrição
A API retorna status 200 (OK) na atualização, mas o post não é realmente atualizado no servidor.

## Passos para Reproduzir
1. Fazer requisição PUT para /posts/1
2. Enviar payload com title, body e userId atualizados
3. Realizar requisição GET para /posts/1 para validar a atualização

## Resultado Esperado
- Status 200 (OK)
- Post atualizado com sucesso
- GET retorna os dados atualizados do post

## Resultado Atual 
- Status 200 (OK) no PUT
- GET retorna os dados antigos, sem atualização
- Dados permanecem inalterados no servidor

## Prioridade: ALTA
- Não está atualizando os posts
- Afeta funcionalidade core do sistema

## Evidências
![API Posts Tests -- should update an existing post - BUG (failed).png](cypress\screenshots\post.cy.js)
