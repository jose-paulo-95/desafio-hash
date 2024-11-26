import LoginActions from './actions/loginActions'

describe('Login and Password Recovery', () => {
  beforeEach(() => {
    Cypress.on("uncaughtException", (err, runable) => {
      return false;
    });
    cy.visit('/login', { failOnStatusCode: false })
  })

  it('should show error with invalid email', () => {
    LoginActions.login('invalid_email@test.com', 'password123')
    LoginActions.validateErrorMessage('Your username is invalid!')
  })

  it('should login successfully using valid credentials', () => {
    LoginActions.login('tomsmith', 'SuperSecretPassword!')
    LoginActions.validateLoginSuccess()
  })

  it('should show error with invalid password', () => {
    LoginActions.login('tomsmith', 'wrong_password')
    LoginActions.validateErrorMessage('Your password is invalid!')
  })

  it('should validate required field', () => {
    LoginActions.clickLoginButton()
    LoginActions.validateRequiredField()
  })
}) 