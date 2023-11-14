// cypress/e2e/login.cy.js

import {
    credentials,
    loginErrors,
    usernameField,
    passwordField,
    loginButton,
    loginError
} from '../support/utils/login.utils';

describe('login page', { tags: ['@login', '@smoke'] }, () => {
    beforeEach(() => {
        cy.visit('/');
    });

    context('user views page', { tags: '@loginSanity' }, () => {
        it('title is visible', () => {
            cy.get('.login_logo')
                .should('be.visible')
                .and('have.text', 'Swag Labs');
        });
    });

    context('user attempts login', () => {
        beforeEach(() => {
            usernameField().clear();
            passwordField().clear();
        });

        it('successful login with valid username and password', { tags: '@loginPositive' }, () => {
            usernameField().type(credentials.VALID_USERNAME);
            passwordField().type(credentials.VALID_PASSWORD);
            loginButton().click();

            cy.get('.title')
                .should('be.visible')
                .and('have.text', 'Products');
        });

        context('unsuccessful login with', { tags: '@loginNegative' }, () => {
            it('invalid username', () => {
                usernameField().type(credentials.INVALID_USERNAME);
                passwordField().type(credentials.VALID_PASSWORD);
                loginButton().click();

                loginError().should('have.text', loginErrors.NO_MATCH);
            });

            it('invalid password', () => {
                usernameField().type(credentials.VALID_USERNAME);
                passwordField().type(credentials.INVALID_PASSWORD);
                loginButton().click();

                loginError().should('have.text', loginErrors.NO_MATCH);
            });

            it('invalid username and password', () => {
                usernameField().type(credentials.INVALID_USERNAME);
                passwordField().type(credentials.INVALID_PASSWORD);
                loginButton().click();

                loginError().should('have.text', loginErrors.NO_MATCH);
            });

            it('empty username field', () => {
                passwordField().type(credentials.VALID_PASSWORD);
                loginButton().click();

                loginError().should('have.text', loginErrors.USERNAME_REQUIRED);
            });

            it('empty password field', () => {
                usernameField().type(credentials.VALID_USERNAME);
                loginButton().click();

                loginError().should('have.text', loginErrors.PASSWORD_REQUIRED);
            });

            it('empty username and password fields', () => {
                loginButton().click();

                loginError().should('have.text', loginErrors.USERNAME_REQUIRED);
            });
        });
    });
});
