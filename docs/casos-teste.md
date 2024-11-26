# Casos de Teste

## 1. Cenários de Login e Recuperação de Senha

### Feature: Login no sistema
Como um usuário do sistema
Eu quero fazer login na aplicação
Para acessar as funcionalidades restritas

Cenário: Login com credenciais válidas
Dado que sou um usuário cadastrado no sistema
Quando eu inserir um email válido
E inserir uma senha válida 
E clicar no botão "Entrar"
Então devo ser autenticado com sucesso
E ser redirecionado para a página inicial

Cenário: Login com credenciais inválidas
Dado que sou um usuário do sistema
Quando eu inserir um email inválido
E inserir uma senha inválida
E clicar no botão "Entrar"
Então devo ver uma mensagem de erro apropriada
E permanecer na página de login

### Feature: Recuperação de senha
Como um usuário do sistema
Eu quero recuperar minha senha
Para conseguir acessar minha conta

Cenário: Recuperação de senha com email válido
Dado que esqueci minha senha
Quando eu clicar em "Esqueci minha senha"
E inserir meu email válido cadastrado
E clicar em "Confirmar"
Então devo receber um email com instruções de recuperação
E ver uma mensagem de confirmação na tela

Cenário: Bloqueio após múltiplas tentativas
Dado que sou um usuário do sistema
Quando eu tentar fazer login com senha incorreta 5 vezes consecutivas
Então minha conta deve ser temporariamente bloqueada
E devo ver uma mensagem informando o bloqueio
E não devo conseguir fazer novas tentativas de login

Cenário: Validação de força da nova senha
Dado que acessei o link de recuperação de senha
Quando eu tentar definir uma senha que não atende aos requisitos mínimos
Então o sistema deve rejeitar a senha fraca
E exibir os requisitos mínimos de segurança
E manter-me na página de definição de senha

## 2. Cenários Não Funcionais

### Feature: Performance do sistema
Como um administrador do sistema
Eu quero garantir a performance do login
Para proporcionar boa experiência aos usuários

Cenário: Teste de performance do login
Dado que o sistema está em ambiente de produção
Quando 100 usuários tentarem fazer login simultaneamente
Então o tempo de resposta deve ser menor que 2 segundos
E não devem ocorrer erros de timeout

### Feature: Segurança do sistema
Como um administrador do sistema
Eu quero garantir a segurança dos dados
Para proteger as informações dos usuários

Cenário: Validação de criptografia de dados
Dado que um usuário está fazendo login
Quando os dados são transmitidos
Então todas as informações sensíveis devem estar criptografadas
E o tráfego deve usar protocolo HTTPS

### Feature: Compatibilidade com navegadores
Como um usuário do sistema
Eu quero acessar de diferentes navegadores
Para ter flexibilidade de acesso

Cenário: Teste de compatibilidade cross-browser
Dado que acesso o sistema
Quando usar os navegadores Chrome, Firefox e Safari
Então todas as funcionalidades devem funcionar corretamente
E manter a mesma experiência visual em todos os navegadores