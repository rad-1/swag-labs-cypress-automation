// Login page tests

import credentials from '../fixtures/credentials.json';

const loginError = {
    invalidCreds: 'Epic sadface: Username and password do not match any user in this service',
    usernameRequired: 'Epic sadface: Username is required',
    passwordRequired: 'Epic sadface: Password is required',
};

describe('login page tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should have a title', () => {
        cy.get('.login_logo').should('have.text', 'Swag Labs');
    });

    it('should log in with valid credentials', () => {
        cy.login(
            credentials.username.standard,
            credentials.password.valid,
        );
        cy.get('.title').should('have.text', 'Products');
    });

    it('should fail on login with invalid credentials', () => {
        cy.login(credentials.username.invalid, credentials.password.invalid);
        cy.get('[data-test="error"]').should('have.text', loginError.invalidCreds);
    });

    it('should fail on login with an invalid username', () => {
        cy.login(credentials.username.invalid, credentials.password.valid);
        cy.get('[data-test="error"]').should('have.text', loginError.invalidCreds);
    });

    it('should fail on login with an invalid password', () => {
        cy.login(credentials.username.standard, credentials.password.invalid);
        cy.get('[data-test="error"]').should('have.text', loginError.invalidCreds);
    });

    it('should fail on login with an empty string as a username', () => {
        cy.login('', credentials.password.valid);
        cy.get('[data-test="error"]').should('have.text', loginError.usernameRequired);
    });

    it('should fail on login with an empty string as a password', () => {
        cy.login(credentials.username.standard, '');
        cy.get('[data-test="error"]').should('have.text', loginError.passwordRequired);
    });

    it('should fail on login with empty strings for both username and password', () => {
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', loginError.usernameRequired);
    });
});
