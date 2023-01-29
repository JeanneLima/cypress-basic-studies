Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (firstName) => {
  cy.get('#firstName').type(firstName)
  cy.get('#lastName').type('Silva')
  cy.get('#email').type('fulano.silva@gmail.com')
  cy.get('#open-text-area').type('Teste')
  cy.get('.button[type="submit"]').click()
})