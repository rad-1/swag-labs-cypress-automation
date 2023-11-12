// Login page tests

import credentials from '../fixtures/credentials.json';

const loginError = {
    invalidCreds: 'Epic sadface: Username and password do not match any user in this service',
    usernameRequired: 'Epic sadface: Username is required',
    passwordRequired: 'Epic sadface: Password is required',
};

describe('Login page', { tags: '@loginPage' }, () => {
    beforeEach(() => {
        cy.visit('/');
    });

    context('When a user views the page', { tags: '@loginSanity' }, () => {
        it('Title is visible', () => {
            cy.get('.login_logo')
                .should('be.visible')
                .and('have.text', 'Swag Labs');
        });
    });

    context('When a user attempts to login', () => {
        context('Successful login', { tags: '@loginPositive' }, () => {
            it('Valid username and password', () => {
                cy.login(credentials.username.standard, credentials.password.valid);
                cy.get('.title')
                    .should('be.visible')
                    .and('have.text', 'Products');
            });
        });

        context('Unsuccessful login', { tags: '@loginNegative' }, () => {
            it('Invalid username and password', () => {
                cy.login(credentials.username.invalid, credentials.password.invalid);
                cy.get('[data-test="error"]').should('have.text', loginError.invalidCreds);
            });

            it('Invalid username', () => {
                cy.login(credentials.username.invalid, credentials.password.valid);
                cy.get('[data-test="error"]').should('have.text', loginError.invalidCreds);
            });

            it('Invalid password', () => {
                cy.login(credentials.username.standard, credentials.password.invalid);
                cy.get('[data-test="error"]').should('have.text', loginError.invalidCreds);
            });

            it('Empty string username', () => {
                cy.login('', credentials.password.valid);
                cy.get('[data-test="error"]').should('have.text', loginError.usernameRequired);
            });

            it('Empty string password', () => {
                cy.login(credentials.username.standard, '');
                cy.get('[data-test="error"]').should('have.text', loginError.passwordRequired);
            });

            it('Empty string username and password', () => {
                cy.get('[data-test="login-button"]').click();
                cy.get('[data-test="error"]').should('have.text', loginError.usernameRequired);
            });
        });
    });
});
