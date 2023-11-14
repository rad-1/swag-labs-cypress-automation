// cypress/support/utils/login.utils.js

const selectors = {
    USERNAME_FIELD: 'username',
    PASSWORD_FIELD: 'password',
    LOGIN_BUTTON: 'login-button',
    LOGIN_ERROR: 'error'
};

export const credentials = {
    VALID_USERNAME: Cypress.env('username'),
    VALID_PASSWORD: Cypress.env('password'),
    INVALID_USERNAME: 'invalid_username',
    INVALID_PASSWORD: 'invalid_password'
};

export const loginErrors = {
    NO_MATCH: 'Epic sadface: Username and password do not match any user in this service',
    USERNAME_REQUIRED: 'Epic sadface: Username is required',
    PASSWORD_REQUIRED: 'Epic sadface: Password is required'
};

export const usernameField = () => cy.getBySel(selectors.USERNAME_FIELD);
export const passwordField = () => cy.getBySel(selectors.PASSWORD_FIELD);
export const loginButton = () => cy.getBySel(selectors.LOGIN_BUTTON);
export const loginError = () => cy.getBySel(selectors.LOGIN_ERROR);
