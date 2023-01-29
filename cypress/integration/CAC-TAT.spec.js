/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  }); 

  it('deve exibir na aba do navegador "Central de Atendimento ao Cliente TAT" como título da aplicação quando a página for carregada', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('deve exibir mensagem de sucesso quando enviado o formulário com os campos obrigatórios preenchidos', () => {
    const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    cy.get('#firstName').type('Fulano')
    cy.get('#lastName').type('Silva')
    cy.get('#email').type('fulano.silva@gmail.com')
    cy.get('#open-text-area').type(longText, { delay: 0 })
    cy.get('.button[type="submit"]').click()
    cy.get('.success').should('be.visible')
  })

  it('deve exibir mensagem de erro quando submetido o formulário com um email com formatação inválida', () => {
    cy.get('#firstName').type('Fulano')
    cy.get('#lastName').type('Silva')
    cy.get('#email').type('fulanosilva$gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('.button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })

  it('deve manter o campo de telefone vazio quando digitado valor não-numérico no mesmo', () => {
    cy.get('#phone')
      .type('abc@')
      .should('have.value', '')
  })

  it('deve exibir mensagem de erro quando o telefone se torna obrigatório, mas não é preenchido antes do envio do formulário', () => {
    cy.get('#firstName').type('Fulano')
    cy.get('#lastName').type('Silva')
    cy.get('#email').type('fulano.silva@gmail.com')
    cy.get('#phone-checkbox').click()
    cy.get('#open-text-area').type('Teste')
    cy.get('.button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })

  it('deve preencher e limpar os campos "Nome", "Sobrenome", "E-mail" e "Telefone" conforme digitação', () => {
    const firstName = 'Fulano';
    const lastName = 'Silva';
    const email = 'fulano.silva@gmail.com';
    const phone = '00000000';

    cy.get('#firstName')
      .type(firstName)
      .should('have.value', firstName)
      .clear()
      .should('have.value', '')

    cy.get('#lastName')
      .type(lastName)
      .should('have.value', lastName)
      .clear()
      .should('have.value', '')

    cy.get('#email')
      .type(email)
      .should('have.value', email)
      .clear()
      .should('have.value', '')

    cy.get('#phone')
      .type(phone)
      .should('have.value', phone)
      .clear()
      .should('have.value', '')
  })

  it('deve exibir mensagem de erro quando submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.get('.button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })

  it('deve enviar o formulário com sucesso usando um comando customizado', () => {
    cy.fillMandatoryFieldsAndSubmit('Ciclano')
    cy.get('.success').should('be.visible')
  })
})