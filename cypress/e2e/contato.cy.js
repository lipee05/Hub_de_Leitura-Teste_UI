describe('Funcionalidade: Contato', () => {

  beforeEach(() => {
    cy.visit('/index.html')
  });

  // "primeiro" teste automatizado
  it('Deve preencher formulario do contato de sucesso', () => {
    cy.get('[name="name"]').type('Luiz Felipe')
    cy.get('[name="email"]').type('luizfelipe@teste.com')
    cy.get('[name="subject"]').select('Parcerias')
    cy.get('[name="message"]').type('Teste')
    cy.get('#btn-submit').click()
    cy.contains('Contato enviado com sucesso!')
  })

  it('Deve validar a mensagem de erro ao enviar sem preencher o nome', () => {
    cy.get('[name="email"]').type('luizfelipe@teste.com')
    cy.get('[name="subject"]').select('Parcerias')
    cy.get('[name="message"]').type('Teste')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome')
  });

  it('Deve validar a mensagem de erro ao enviar sem preencher o email', () => {
    cy.get('[name="name"]').type('Luiz Felipe')
    cy.get('[name="subject"]').select('Parcerias')
    cy.get('[name="message"]').type('Teste')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail.')
  });

  it('Deve validar a mensagem de erro ao enviar sem selecionar o assunto', () => {
    cy.get('[name="name"]').type('Luiz Felipe')
    cy.get('[name="email"]').type('luizfelipe@teste.com')
    cy.get('[name="message"]').type('Teste')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto.')
  });

  it('Deve validar a mensagem de erro ao enviar sem preencher mensagem', () => {
    cy.get('[name="name"]').type('Luiz Felipe')
    cy.get('[name="email"]').type('luizfelipe@teste.com')
    cy.get('[name="subject"]').select('Parcerias')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem.')
  });

})