// cypress/e2e/login.cy.js

import {
    LOGIN_PAGE,
    INVENTORY_PAGE,
} from '../support/constants'

describe('login page', { tags: ['@login', '@smoke'] }, () => {
    beforeEach(() => {
        cy.visit('/')
    })

    context('user can view page', { tags: '@loginSanity' }, () => {
        it('login logo is visible', () => {
            cy.get('.login_logo')
                .should('be.visible')
                .and('have.text', LOGIN_PAGE.LOGIN_LOGO_TXT)
        })
    })

    context('user login', () => {
        it('successful login with valid username and password', {
            tags: '@loginPositive'
        }, () => {
            cy.submitLoginForm(
                LOGIN_PAGE.CREDENTIALS.VALID_USERNAME,
                LOGIN_PAGE.CREDENTIALS.VALID_PASSWORD
            )

            cy.get('.title')
                .should('be.visible')
                .and('have.text', INVENTORY_PAGE.TITLE_TXT)
        })

        context('unsuccessful login with', { tags: '@loginNegative' }, () => {
            it('invalid username', () => {
                cy.submitLoginForm(
                    LOGIN_PAGE.CREDENTIALS.INVALID_USERNAME,
                    LOGIN_PAGE.CREDENTIALS.VALID_PASSWORD
                )

                cy.getBySel('error')
                    .should('be.visible')
                    .and('have.text', LOGIN_PAGE.ERRORS.NO_MATCH)
            })

            it('invalid password', () => {
                cy.submitLoginForm(
                    LOGIN_PAGE.CREDENTIALS.VALID_USERNAME,
                    LOGIN_PAGE.CREDENTIALS.INVALID_PASSWORD
                )

                cy.getBySel('error')
                    .should('be.visible')
                    .and('have.text', LOGIN_PAGE.ERRORS.NO_MATCH)
            })

            it('invalid username and password', () => {
                cy.submitLoginForm(
                    LOGIN_PAGE.CREDENTIALS.INVALID_USERNAME,
                    LOGIN_PAGE.CREDENTIALS.INVALID_PASSWORD
                )

                cy.getBySel('error')
                    .should('be.visible')
                    .and('have.text', LOGIN_PAGE.ERRORS.NO_MATCH)
            })

            it('empty username field', () => {
                cy.getBySel('username').clear()
                cy.getBySel('password').type(LOGIN_PAGE.CREDENTIALS.VALID_PASSWORD, {log: false})
                cy.getBySel('login-button').click()

                cy.getBySel('error')
                    .should('be.visible')
                    .and('have.text', LOGIN_PAGE.ERRORS.USERNAME_REQUIRED)
            })

            it('empty password field', () => {
                cy.getBySel('password').clear()
                cy.getBySel('username').type(LOGIN_PAGE.CREDENTIALS.VALID_USERNAME)
                cy.getBySel('login-button').click()

                cy.getBySel('error')
                    .should('be.visible')
                    .and('have.text', LOGIN_PAGE.ERRORS.PASSWORD_REQUIRED)
            })

            it('empty username and password fields', () => {
                cy.getBySel('username').clear()
                cy.getBySel('password').clear()
                cy.getBySel('login-button').click()

                cy.getBySel('error')
                    .should('be.visible')
                    .and('have.text', LOGIN_PAGE.ERRORS.USERNAME_REQUIRED)
            })

            it('locked out username', () => {
                cy.submitLoginForm(
                    LOGIN_PAGE.CREDENTIALS.LOCKED_OUT_USERNAME,
                    LOGIN_PAGE.CREDENTIALS.VALID_PASSWORD
                )

                cy.getBySel('error')
                    .should('be.visible')
                    .and('have.text', LOGIN_PAGE.ERRORS.LOCKED_OUT)
            })
        })
    })
})
