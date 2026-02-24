/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';
import cadastrosPage from '../support/pages/cadastros-pages';

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cadastrosPage.visitarPaginaCadastro()
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
        // falha proposital
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

    it('deve preencher cadastro usando custom commands', () => {
        let email = `luizfelipe${Date.now()}@teste.com`
        let nome = faker.person.fullName()
        cy.preencherCadastro(
            nome,
            email,
            '2198765432',
            '123@456',
            '123@456')
        cy.url().should('include', 'dashboard')
    });

    it('Deve fazer cadastro com sucesso usando PageObjects', () => {
        let email = `luizfelipe${Date.now()}@teste.com`
        cadastrosPage.preencherCadastro('luiz felipe', email, '2112345678', 'senha123', 'senha123')
        cy.url().should('include', 'dashboard')
    });

    it('deve validar mensagem ao tentar cadastrar sem preencher o nome', () => {
        cadastrosPage.preencherCadastro('', 'luizfelipe@teste.com', '2112345678', 'senha123', 'senha123')
        
        cy.get(':nth-child(1) > .invalid-feedback').should('contain', 'Nome deve ter pelo menos 2 caracteres')
    });
});