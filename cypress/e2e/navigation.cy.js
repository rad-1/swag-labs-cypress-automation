// cypress/e2e/navigation.cy.js

import { HAMBURGER_NAV } from '../support/constants'

describe('user navigation via hamburger menu', {tags: ['@navigation', '@smoke']}, () => {
    context('authenticated user can access', () => {
        beforeEach(() => {
            cy.loginViaUi()
            cy.get('button#react-burger-menu-btn').click()
        })

        it('"All Items" link', () => {
            cy.get('a#inventory_sidebar_link')
                .should('have.attr', 'href', HAMBURGER_NAV.ALL_ITEMS.HREF)
                .and('have.text', HAMBURGER_NAV.ALL_ITEMS.HREF_TXT)
        })

        it('"About" link', () => {
            cy.get('a#about_sidebar_link')
                .should('have.attr', 'href', HAMBURGER_NAV.ABOUT.HREF)
                .and('have.text', HAMBURGER_NAV.ABOUT.HREF_TXT)
        })

        it('"Logout" link', () => {
            cy.get('a#logout_sidebar_link')
                .should('have.attr', 'href', HAMBURGER_NAV.LOGOUT.HREF)
                .and('have.text', HAMBURGER_NAV.LOGOUT.HREF_TXT)
        })

        it('"Reset App State" link', () => {
            cy.get('a#reset_sidebar_link')
                .should('have.attr', 'href', HAMBURGER_NAV.RESET_APP_STATE.HREF)
                .and('have.text', HAMBURGER_NAV.RESET_APP_STATE.HREF_TXT)
        })
    })
})