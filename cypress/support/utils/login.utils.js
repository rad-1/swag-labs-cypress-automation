// cypress/support/utils/login.utils.js

const SELECTORS = {
    USERNAME_FIELD: 'username',
    PASSWORD_FIELD: 'password',
    LOGIN_BUTTON: 'login-button',
    LOGIN_ERROR: 'error'
};

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

export const usernameField = () => cy.getBySel(SELECTORS.USERNAME_FIELD);
export const passwordField = () => cy.getBySel(SELECTORS.PASSWORD_FIELD);
export const loginButton = () => cy.getBySel(SELECTORS.LOGIN_BUTTON);
export const loginError = () => cy.getBySel(SELECTORS.LOGIN_ERROR);
export { CREDENTIALS, LOGIN_ERRORS };