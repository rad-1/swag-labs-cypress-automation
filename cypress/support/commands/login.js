// commands/login.js

Cypress.Commands.add('login', (username, password) => {
    const userField = '[data-test="username"]';
    const passField = '[data-test="password"]';

    if (username === '') {
        cy.get(passField).type(password);
    } else if (password === '') {
        cy.get(userField).type(username);
    } else {
        cy.get(userField).type(username);
        cy.get(passField).type(password);
    }

    cy.get('[data-test="login-button"]').click();
});
