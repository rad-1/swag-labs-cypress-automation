// cypress/support/login.commands.js

Cypress.Commands.add('login', (username, password) => {
    cy.getBySel('username').type(username)
    cy.getBySel('password').type(password, {log: false})
    cy.getBySel('login-button').click()
});
