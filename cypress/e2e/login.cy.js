/// <reference types="cypress"/>
import user from "../fixtures/usuario.json"

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('login.html')
    });

    it('deve fazer login com sucesso', () => {
        cy.get('#email').type('usuario@teste.com')
        cy.get('#password').type('user123')
        cy.get('#login-btn').click()
        cy.url().should('include', 'dashboard.html')
    });


    it('Deve fazer login usando Custom Commands', () => {
        cy.login('usuario@teste.com', 'user123')
        cy.url().should('include', 'dashboard.html')
    });

    it('Fazer login como ADM', () => {
        cy.login('admin@biblioteca.com', 'admin123')
        cy.url().should('include', 'dashboard.html')
    });

    it('Deve fazer login usando Custom Commands', () => {
        cy.login(user.email, user.senha)
    });
});