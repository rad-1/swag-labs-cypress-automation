// cypress/e2e/login.cy.js

const CREDENTIALS = {
    VALID_USERNAME: Cypress.env('username'),
    VALID_PASSWORD: Cypress.env('password'),
    INVALID_USERNAME: 'invalid_username',
    INVALID_PASSWORD: 'invalid_password'
};

const LOGIN_ERRORS = {
    NO_MATCH: 'Epic sadface: Username and password do not match any user in this service',
    USERNAME_REQUIRED: 'Epic sadface: Username is required',
    PASSWORD_REQUIRED: 'Epic sadface: Password is required'
};

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
        const usernameField = () => cy.getBySel('username');
        const passwordField = () => cy.getBySel('password');
        const loginButton = () => cy.getBySel('login-button');
        const loginError = () => cy.getBySel('error');

        beforeEach(() => {
            usernameField().clear();
            passwordField().clear();
        });

        it('successful login with valid username and password', { tags: '@loginPositive' }, () => {
            usernameField().type(CREDENTIALS.VALID_USERNAME);
            passwordField().type(CREDENTIALS.VALID_PASSWORD);
            loginButton().click();

            cy.get('.title')
                .should('be.visible')
                .and('have.text', 'Products');
        });

        context('unsuccessful login with', { tags: '@loginNegative' }, () => {
            it('invalid username', () => {
                usernameField().type(CREDENTIALS.INVALID_USERNAME);
                passwordField().type(CREDENTIALS.VALID_PASSWORD);
                loginButton().click();
                loginError().should('have.text', LOGIN_ERRORS.NO_MATCH);
            });

            it('invalid password', () => {
                usernameField().type(CREDENTIALS.VALID_USERNAME);
                passwordField().type(CREDENTIALS.INVALID_PASSWORD);
                loginButton().click();
                loginError().should('have.text', LOGIN_ERRORS.NO_MATCH);
            });

            it('invalid username and password', () => {
                usernameField().type(CREDENTIALS.INVALID_USERNAME);
                passwordField().type(CREDENTIALS.INVALID_PASSWORD);
                loginButton().click();
                loginError().should('have.text', LOGIN_ERRORS.NO_MATCH);
            });

            it('empty username field', () => {
                passwordField().type(CREDENTIALS.VALID_PASSWORD);
                loginButton().click();
                loginError().should('have.text', LOGIN_ERRORS.USERNAME_REQUIRED);
            });

            it('empty password field', () => {
                usernameField().type(CREDENTIALS.VALID_USERNAME);
                loginButton().click();
                loginError().should('have.text', LOGIN_ERRORS.PASSWORD_REQUIRED);
            });

            it('empty username and password fields', () => {
                loginButton().click();
                loginError().should('have.text', LOGIN_ERRORS.USERNAME_REQUIRED);
            });
        });
    });
});
