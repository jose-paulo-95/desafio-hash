class LoginElements {
    // Inputs
    inputUsername = '#username'
    inputPassword = '#password'
    
    // Buttons
    submitButton = 'button[type="submit"]'
    logoutButton = 'a[href="/logout"]'
   
    
    // Messages
    flashMessage = '#flash'
    errorMessage = 'div.error'
    subheader = 'h4.subheader'
}

export default new LoginElements()