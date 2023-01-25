/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', () => {
  it('deve exibir no título da aba "Central de Atendimento ao Cliente TAT" quando a página for carregada', function() {
    cy.visit('./src/index.html')
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })
})