// cypress/support/constants/login.constants.js

const CREDENTIALS = {
    VALID_USERNAME: Cypress.env('username'),
    VALID_PASSWORD: Cypress.env('password'),
    INVALID_USERNAME: 'invalid_username',
    INVALID_PASSWORD: 'invalid_password',
    LOCKED_OUT_USERNAME: 'locked_out_user'
}

const LOGIN_ERRORS = {
    NO_MATCH:
    'Epic sadface: Username and password do not match any user in this service',
    USERNAME_REQUIRED: 'Epic sadface: Username is required',
    PASSWORD_REQUIRED: 'Epic sadface: Password is required',
    LOCKED_OUT: 'Epic sadface: Sorry, this user has been locked out.'
}

export { CREDENTIALS, LOGIN_ERRORS }