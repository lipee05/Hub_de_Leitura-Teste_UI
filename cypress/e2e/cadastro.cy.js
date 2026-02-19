/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cy.visit('register.html')
    });



    it('deve fazer cadastro usando JS', () => {
        let email = `luizfelipe${Date.now()}@teste.com`
        cy.get('#name').type('luiz felipe')
        cy.get('#email').type(email)
        cy.get('#phone').type('2198765432')
        cy.get('#password').type('123@456')
        cy.get('#confirm-password').type('123@456')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
    });

    it('deve fazer cadastro usando Faker', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('2198765432')
        cy.get('#password').type('123@456')
        cy.get('#confirm-password').type('123@456')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        // validação do teste
        cy.url().should('include', 'dashboard')
        cy.get('#user-name').should('contain', nome)
    });


});