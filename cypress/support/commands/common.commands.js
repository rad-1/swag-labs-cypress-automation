// cypress/support/commmon.commands.js

Cypress.Commands.add('getBySel', (selector) => {
    return cy.get(`[data-test=${selector}]`)
})

Cypress.Commands.add('loginViaUi', () => {
    cy.visit('/', {
        onBeforeLoad(win) {
            delete win.navigator.__proto__.serviceWorker
        }
    })
    cy.login(Cypress.env('username'), Cypress.env('password'))
    cy.url().should('contain', '/inventory.html')
})
