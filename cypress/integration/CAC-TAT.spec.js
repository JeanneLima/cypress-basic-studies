/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', () => {
  it('deve exibir na aba do navegador "Central de Atendimento ao Cliente TAT" como título da aplicação quando a página for carregada', function() {
    cy.visit('./src/index.html')
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })
})