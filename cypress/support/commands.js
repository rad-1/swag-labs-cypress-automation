// cypress/support/commands.js

import { INVENTORY_PAGE } from './constants'

Cypress.Commands.add('getBySel', (selector) => {
    cy.get(`[data-test=${selector}]`)
})

Cypress.Commands.add('getBySelLike', (selector) => {
    cy.get(`[data-test*=${selector}]`)
})

Cypress.Commands.add('loginViaUi', (username, password) => {
    const user = username || Cypress.env('username')
    const pass = password || Cypress.env('password')

    cy.visit('/', {
        // https://github.com/cypress-io/cypress/issues/27501
        onBeforeLoad(win) {
            delete win.navigator.__proto__.serviceWorker
        }
    })
    cy.getBySel('username').type(user)
    cy.getBySel('password').type(pass, {log: false})
    cy.getBySel('login-button').click()

    cy.contains(INVENTORY_PAGE.TITLE_TXT).should('be.visible')
})
