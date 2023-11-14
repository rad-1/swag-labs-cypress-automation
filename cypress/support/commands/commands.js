// cypress/support/commands.js

Cypress.Commands.add('getBySel', (selector) => {
    return cy.get(`[data-test=${selector}]`);
});
