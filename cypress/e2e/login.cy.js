// cypress/e2e/login.cy.js

import credentials from '../fixtures/credentials.json';
import { LOGIN_ERROR } from '../support/constants/login.constants.js';

describe('Login page', { tags: '@loginPage' }, () => {
    beforeEach(() => {
        cy.visit('/');
    });

    context('When a user views the page', { tags: '@loginSanity' }, () => {
        it('The title is visible', () => {
            cy.get('.login_logo')
                .should('be.visible')
                .and('have.text', 'Swag Labs');
        });
    });

    context('When a user attempts to log in', () => {
        context('The user can successfully login with', { tags: '@loginPositive' }, () => {
            it('Valid username and password', () => {
                cy.login(credentials.username.valid, credentials.password.valid);
                cy.get('.title')
                    .should('be.visible')
                    .and('have.text', 'Products');
            });
        });

        context('The user cannot log in with', { tags: '@loginNegative' }, () => {
            it('Invalid username', () => {
                cy.login(credentials.username.invalid, credentials.password.valid);
                cy.getBySel('error').should('have.text', LOGIN_ERROR.INVALID_CREDENTIALS);
            });

            it('Invalid password', () => {
                cy.login(credentials.username.valid, credentials.password.invalid);
                cy.getBySel('error').should('have.text', LOGIN_ERROR.INVALID_CREDENTIALS);
            });

            it('Invalid username and password', () => {
                cy.login(credentials.username.invalid, credentials.password.invalid);
                cy.getBySel('error').should('have.text', LOGIN_ERROR.INVALID_CREDENTIALS);
            });

            it('No username', () => {
                cy.getBySel('username').clear();
                cy.getBySel('password').type(credentials.password.valid);
                cy.getBySel('login-button').click();
                cy.getBySel('error').should('have.text', LOGIN_ERROR.USERNAME_REQUIRED);
            });

            it('No password', () => {
                cy.getBySel('username').type(credentials.username.valid);
                cy.getBySel('password').clear();
                cy.getBySel('login-button').click();
                cy.getBySel('error').should('have.text', LOGIN_ERROR.PASSWORD_REQUIRED);
            });

            it('No username and password', () => {
                cy.getBySel('login-button').click();
                cy.getBySel('error').should('have.text', LOGIN_ERROR.USERNAME_REQUIRED);
            });
        });
    });
});
