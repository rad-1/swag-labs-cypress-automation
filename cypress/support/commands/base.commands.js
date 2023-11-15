// cypress/support/base.commands.js

Cypress.Commands.add('getBySel', (selector) => {
    return cy.get(`[data-test=${selector}]`);
});

Cypress.Commands.add('loginViaUi', () => {
    cy.visit('/');
    cy.login(Cypress.env('username'), Cypress.env('password'));
    cy.url().should('contain', '/inventory.html');
});
