class CadastrosPage {

//seletores
campoNome() {return cy.get('#name')}
campoEmail() {return cy.get('#email')}
campoTelefone() {return cy.get('#phone')}
campoSenha () {return cy.get('#password')}
campoConfirmarSenha () {return cy.get('#confirm-password')}
campoConfirmarTermos () {return cy.get('#terms-agreement')}
campoCriarConta () {return cy.get('#register-btn')}




//metodos

visitarPaginaCadastro() {

    cy.visit('register.html')
}

preencherCadastro(nome, email, telefone, senha, cs) {
    if(nome) this.campoNome().clear().type(nome)
    this.campoEmail().clear().type(email)
    this.campoTelefone().clear().type(telefone)
    this.campoSenha().clear().type(senha)
    this.campoConfirmarSenha().clear().type(cs)
    this.campoConfirmarTermos().check()
    this.campoCriarConta().click()
}

}


export default new CadastrosPage()