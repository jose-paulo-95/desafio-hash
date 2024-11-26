import LoginElements from '../elements/loginElements'
class LoginActions {
    preencherEmail(email) {
        cy.get(LoginElements.inputEmail)
            .type(email)
    }

    preencherSenha(senha) {
        cy.get(LoginElements.inputSenha)
            .type(senha)
    }

    clicarBotaoLogin() {
        cy.get(LoginElements.botaoSubmit)
            .click()
    }

    validarMensagemErro(mensagem) {
        cy.get(LoginElements.mensagemFlash)
            .should('contain', mensagem)
    }

    validarLoginSucesso() {
        cy.get(LoginElements.mensagemFlash)
            .should('contain', 'You logged into a secure area!')
        cy.get(LoginElements.subheader)
            .should('contain', 'Welcome to the Secure Area. When you are done click logout below.')
        cy.get(LoginElements.botaoLogout)
            .should('contain', 'Logout')
    }

    validarCampoObrigatorio() {
        cy.get(LoginElements.mensagemErro)
            .should('exist')
    }

    fazerLogin(email, senha) {
        this.preencherEmail(email)
        this.preencherSenha(senha)
        this.clicarBotaoLogin()
    }
}

export default new LoginActions() 