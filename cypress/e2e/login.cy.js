// cypress/e2e/login.cy.js

const validUsername = Cypress.env('username');
const validPassword = Cypress.env('password');
const invalidUsername = `${Cypress.env('username')}_invalid`;
const invalidPassword = `${Cypress.env('password')}_invalid`;

const generalErrTxt = 'Epic sadface: Username and password do not match any user in this service';
const usernameErrTxt = 'Epic sadface: Username is required';
const passwordErrTxt = 'Epic sadface: Password is required';

describe('Login page', { tags: ['@login', '@smoke'] }, () => {
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
                cy.login(validUsername, validPassword);
                cy.get('.title')
                    .should('be.visible')
                    .and('have.text', 'Products');
            });
        });

        context('The user cannot log in with', { tags: '@loginNegative' }, () => {
            it('Invalid username', () => {
                cy.login(invalidUsername, validPassword);
                cy.getBySel('error').should('have.text', generalErrTxt);
            });

            it('Invalid password', () => {
                cy.login(validUsername, invalidPassword);
                cy.getBySel('error').should('have.text', generalErrTxt);
            });

            it('Invalid username and password', () => {
                cy.login(invalidUsername, invalidPassword);
                cy.getBySel('error').should('have.text', generalErrTxt);
            });

            it('No username', () => {
                cy.getBySel('username').clear();
                cy.getBySel('password').type(validPassword);
                cy.getBySel('login-button').click();
                cy.getBySel('error').should('have.text', usernameErrTxt);
            });

            it('No password', () => {
                cy.getBySel('username').type(validUsername);
                cy.getBySel('password').clear();
                cy.getBySel('login-button').click();
                cy.getBySel('error').should('have.text', passwordErrTxt);
            });

            it('No username and password', () => {
                cy.getBySel('login-button').click();
                cy.getBySel('error').should('have.text', usernameErrTxt);
            });
        });
    });
});
