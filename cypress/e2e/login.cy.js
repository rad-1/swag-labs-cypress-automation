// Login page tests

import credentials from '../fixtures/credentials.json';

const loginError = {
    invalidCreds: 'Epic sadface: Username and password do not match any user in this service',
    usernameRequired: 'Epic sadface: Username is required',
    passwordRequired: 'Epic sadface: Password is required',
};

describe('login page', { tags: '@loginPage' }, () => {
    beforeEach(() => {
        cy.visit('/');
    });

    context('when user views page', { tags: '@loginSanity' }, () => {
        it('page title is visible', () => {
            cy.get('.login_logo').should('have.text', 'Swag Labs');
        });
    });

    context('when user attempts to log in', () => {
        context('successful login', { tags: '@loginPositive' }, () => {
            it('valid credentials', () => {
                cy.login(
                    credentials.username.standard,
                    credentials.password.valid,
                );
                cy.get('.title').should('have.text', 'Products');
            });
        });

        context('unsuccessful login', { tags: '@loginNegative' }, () => {
            it('invalid username and password', () => {
                cy.login(credentials.username.invalid, credentials.password.invalid);
                cy.get('[data-test="error"]').should('have.text', loginError.invalidCreds);
            });

            it('invalid username', () => {
                cy.login(credentials.username.invalid, credentials.password.valid);
                cy.get('[data-test="error"]').should('have.text', loginError.invalidCreds);
            });

            it('invalid password', () => {
                cy.login(credentials.username.standard, credentials.password.invalid);
                cy.get('[data-test="error"]').should('have.text', loginError.invalidCreds);
            });

            it('empty string username', () => {
                cy.login('', credentials.password.valid);
                cy.get('[data-test="error"]').should('have.text', loginError.usernameRequired);
            });

            it('empty string password', () => {
                cy.login(credentials.username.standard, '');
                cy.get('[data-test="error"]').should('have.text', loginError.passwordRequired);
            });

            it('empty string username and password', () => {
                cy.get('[data-test="login-button"]').click();
                cy.get('[data-test="error"]').should('have.text', loginError.usernameRequired);
            });
        });
    });
});
