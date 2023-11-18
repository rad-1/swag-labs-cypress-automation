// cypress/support/commands.js

import { LOGIN_PAGE, INVENTORY_PAGE } from './constants'

Cypress.Commands.add('getBySel', (selector) => {
    cy.get(`[data-test=${selector}]`)
})

Cypress.Commands.add('getBySelLike', (selector) => {
    cy.get(`[data-test*=${selector}]`)
})

Cypress.Commands.add('submitLoginForm', (username, password) => {
    cy.getBySel('username').type(username)
    cy.getBySel('password').type(password, {log: false})
    cy.getBySel('login-button').click()
})

Cypress.Commands.add('loginViaUi', (username, password) => {
    const user = username || LOGIN_PAGE.CREDENTIALS.VALID_USERNAME
    const pass = password || LOGIN_PAGE.CREDENTIALS.VALID_PASSWORD

    cy.visit('/', {
        // https://github.com/cypress-io/cypress/issues/27501
        onBeforeLoad(win) {
            delete win.navigator.__proto__.serviceWorker
        }
    })
    cy.submitLoginForm(user,pass)

    cy.contains(INVENTORY_PAGE.TITLE_TXT).should('be.visible')
})
