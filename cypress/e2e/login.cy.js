// cypress/e2e/login.cy.js

import {
    LOGIN_LAYOUT,
    CREDENTIALS,
    LOGIN_ERRORS
} from '../support/constants/login.constants'
import { INVENTORY_LAYOUT } from '../support/constants/inventory.constants'

describe('login page', { tags: ['@login', '@smoke'] }, () => {
    beforeEach(() => {
        cy.visit('/')
    })

    context('user can view page', { tags: '@loginSanity' }, () => {
        it('title is visible', () => {
            cy.get('.login_logo')
                .should('be.visible')
                .and('have.text', LOGIN_LAYOUT.TITLE)
        })
    })

    context('user attempts login', () => {
        it('successful login with valid username and password', {
            tags: '@loginPositive'
        }, () => {
            cy.login(
                CREDENTIALS.VALID_USERNAME,
                CREDENTIALS.VALID_PASSWORD
            )

            cy.get('.title')
                .should('be.visible')
                .and('have.text', INVENTORY_LAYOUT.TITLE)
        })

        context('unsuccessful login with', { tags: '@loginNegative' }, () => {
            it('invalid username', () => {
                cy.login(
                    CREDENTIALS.INVALID_USERNAME,
                    CREDENTIALS.VALID_PASSWORD
                )

                cy.getBySel('error')
                    .should('be.visible')
                    .and('have.text', LOGIN_ERRORS.NO_MATCH)
            })

            it('invalid password', () => {
                cy.login(
                    CREDENTIALS.VALID_USERNAME,
                    CREDENTIALS.INVALID_PASSWORD
                )

                cy.getBySel('error')
                    .should('be.visible')
                    .and('have.text', LOGIN_ERRORS.NO_MATCH)
            })

            it('invalid username and password', () => {
                cy.login(
                    CREDENTIALS.INVALID_USERNAME,
                    CREDENTIALS.INVALID_PASSWORD
                )

                cy.getBySel('error')
                    .should('be.visible')
                    .and('have.text', LOGIN_ERRORS.NO_MATCH)
            })

            it('empty username field', () => {
                cy.getBySel('username').clear()
                cy.getBySel('password').type(CREDENTIALS.VALID_PASSWORD)
                cy.getBySel('login-button').click()

                cy.getBySel('error')
                    .should('be.visible')
                    .and('have.text', LOGIN_ERRORS.USERNAME_REQUIRED)
            })

            it('empty password field', () => {
                cy.getBySel('password').clear()
                cy.getBySel('username').type(CREDENTIALS.VALID_USERNAME)
                cy.getBySel('login-button').click()

                cy.getBySel('error')
                    .should('be.visible')
                    .and('have.text', LOGIN_ERRORS.PASSWORD_REQUIRED)
            })

            it('empty username and password fields', () => {
                cy.getBySel('username').clear()
                cy.getBySel('password').clear()
                cy.getBySel('login-button').click()

                cy.getBySel('error')
                    .should('be.visible')
                    .and('have.text', LOGIN_ERRORS.USERNAME_REQUIRED)
            })

            it('locked out username', () => {
                cy.login(
                    CREDENTIALS.LOCKED_OUT_USERNAME,
                    CREDENTIALS.VALID_PASSWORD
                )

                cy.getBySel('error')
                    .should('be.visible')
                    .and('have.text', LOGIN_ERRORS.LOCKED_OUT)
            })
        })
    })
})
