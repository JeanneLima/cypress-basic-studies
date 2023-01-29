/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  }); 

  it('deve exibir na aba do navegador "Central de Atendimento ao Cliente TAT" como título da aplicação quando a página for carregada', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it.only('deve preencher os campos obrigatórios e enviar o formulário', () => {
    cy.get('#firstName').type('Fulano')
    cy.get('#lastName').type('Silva')
    cy.get('#email').type('fulano.silva@gmail.com')
    cy.get('#open-text-area').type('Preciso de X coisa em Y tempo...')
    cy.get('.button[type="submit"]').click()
    cy.get('.success').should('be.visible')
  })
})