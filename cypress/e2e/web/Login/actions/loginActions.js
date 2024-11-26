import LoginElements from '../elements/loginElements'
class LoginActions {
    fillEmail(email) {
        cy.get(LoginElements.inputUsername)
            .type(email)
    }

    fillPassword(password) {
        cy.get(LoginElements.inputPassword)
            .type(password)
    }

    clickLoginButton() {
        cy.get(LoginElements.submitButton)
            .click()
    }

    validateErrorMessage(message) {
        cy.get(LoginElements.flashMessage)
            .should('contain', message)
    }

    validateLoginSuccess() {
        cy.get(LoginElements.flashMessage)
            .should('contain', 'You logged into a secure area!')
        cy.get(LoginElements.subheader)
            .should('contain', 'Welcome to the Secure Area. When you are done click logout below.')
        cy.get(LoginElements.logoutButton)
            .should('contain', 'Logout')
    }

    validateRequiredField() {
        cy.get(LoginElements.errorMessage)
            .should('exist')
    }

    login(email, password) {
        this.fillEmail(email)
        this.fillPassword(password)
        this.clickLoginButton()
    }
}

export default new LoginActions()