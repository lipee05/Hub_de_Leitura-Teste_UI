/// <reference types="cypress"/>

describe('Funcionalidade: Catalogo de livros', () => {

    beforeEach(() => {
        cy.visit('catalog.html')
    });

    it.skip('Deve clicar no botão Adicionar à cesta', () => {
        cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click()
        cy.get('#global-alert-container').should('contain', 'foi adicionado à cesta!')
    });

    it('Deve clicar em todos os botões Adicionar à cesta', () => {
        cy.get('.btn-primary').click({ multiple: true });
        cy.get('#global-alert-container').should('contain', 'foi adicionado à cesta!')
    });

    it('Deve clicar no primeiro botão Adicionar a cesta', () => {
        cy.get('.btn-primary').first().click();
        cy.get('#global-alert-container').should('contain', 'foi adicionado à cesta!')
    });

    it('Deve clicar no ultimo botão Adicionar a cesta', () => {
        cy.get('.btn-primary').last().click();
        cy.get('#global-alert-container').should('contain', 'foi adicionado à cesta!')
    });

    it('Deve clicar no terceiro botão Adicionar a cesta', () => {
        cy.get('.btn-primary').eq(2).click();
        cy.get('#global-alert-container').should('contain', 'foi adicionado à cesta!')
    });

    it('Deve clicar no quinto botão Adicionar a cesta', () => {
        cy.get('.btn-primary').eq(4).click();
        cy.get('#global-alert-container').should('contain', 'foi adicionado à cesta!')
    });

    it('Deve clicar no nome do livro e direcionar para a tela do livro', () => {
        cy.contains('A Divina Comédia').click();
        cy.url().should('include', 'book-details.html')
        cy.get('#add-to-cart-btn').click()
        cy.get('#alert-container').should('contain', 'Livro adicionado à cesta com sucesso!')
    });
});