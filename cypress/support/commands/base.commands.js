// cypress/support/base.commands.js

Cypress.Commands.add('getBySel', (selector) => {
    return cy.get(`[data-test=${selector}]`);
});

Cypress.Commands.add('getBySelLike', (selector) => {
    return cy.get(`[data-test*=${selector}]`);
});
