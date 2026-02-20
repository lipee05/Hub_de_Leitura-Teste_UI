/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('login.html')
    });

    it('deve fazer login com seucesso', () => {
        cy.get('#email').type('usuario@teste.com')
        cy.get('#password').type('user123')
        cy.get('#login-btn').click()
        cy.url().should('include', 'dashboard.html')
    });


    it('Deve fazer login usando Custom Commands', () => {
        cy.login('usuario@teste.com', 'user123')
        cy.url().should('include', 'dashboard.html')
    });

    it.only('Fazer login como ADM', () => {
        cy.login('admin@biblioteca.com', 'admin123')
        cy.url().should('include', 'dashboard.html')
    });



















});