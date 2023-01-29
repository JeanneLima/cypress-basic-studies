/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  }); 

  it('deve exibir na aba do navegador "Central de Atendimento ao Cliente TAT" como título da aplicação quando a página for carregada', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('deve preencher os campos obrigatórios e enviar o formulário', () => {
    const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    cy.get('#firstName').type('Fulano')
    cy.get('#lastName').type('Silva')
    cy.get('#email').type('fulano.silva@gmail.com')
    cy.get('#open-text-area').type(longText, { delay: 0 })
    cy.get('.button[type="submit"]').click()
    cy.get('.success').should('be.visible')
  })
})