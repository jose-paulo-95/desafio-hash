class LoginElements {
    // Inputs
    inputEmail = '#username'
    inputSenha = '#password'
    
    // Botões
    botaoSubmit = 'button[type="submit"]'
    botaoLogout = 'a[href="/logout"]'
   
    
    // Mensagens
    mensagemFlash = '#flash'
    mensagemErro = 'div.error'
    subheader = 'h4.subheader'
}

export default new LoginElements() 