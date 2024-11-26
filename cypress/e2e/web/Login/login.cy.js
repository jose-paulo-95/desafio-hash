import LoginActions from './actions/loginActions'

describe('Login e Recuperação de Senha', () => {
  beforeEach(() => {
    Cypress.on("uncaughtException", (err, runable) => {
      return false;
    });
    cy.visit('/login', { failOnStatusCode: false })
  })

  it('deve mostrar erro com email inválido', () => {
    LoginActions.fazerLogin('email_invalido@teste.com', 'senha123')
    LoginActions.validarMensagemErro('Your username is invalid!')
  })

  it('deve fazer login com sucesso usando credenciais válidas', () => {
    LoginActions.fazerLogin('tomsmith', 'SuperSecretPassword!')
    LoginActions.validarLoginSucesso()
  })

  it('deve mostrar erro com senha inválida', () => {
    LoginActions.fazerLogin('tomsmith', 'senha_incorreta')
    LoginActions.validarMensagemErro('Your password is invalid!')
  })

  it('deve validar campo obrigatório', () => {
    LoginActions.clicarBotaoLogin()
    LoginActions.validarCampoObrigatorio()
  })
}) 