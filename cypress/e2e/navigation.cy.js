// cypress/e2e/navigation.cy.js

import { NAVIGATION } from '../support/constants'

describe('user navigation via hamburger menu', () => {
    context('authenticated user can access', () => {
        beforeEach(() => {
            cy.loginViaUi()
            cy.get('button#react-burger-menu-btn').click()
        })

        it('"All Items" link', () => {
            cy.get('a#inventory_sidebar_link')
                .should('have.attr', 'href', NAVIGATION.ALL_ITEMS.HREF)
                .and('have.text', NAVIGATION.ALL_ITEMS.HREF_TXT)
        })

        it('"About" link', () => {
            cy.get('a#about_sidebar_link')
                .should('have.attr', 'href', NAVIGATION.ABOUT.HREF)
                .and('have.text', NAVIGATION.ABOUT.HREF_TXT)
        })

        it('"Logout" link', () => {
            cy.get('a#logout_sidebar_link')
                .should('have.attr', 'href', NAVIGATION.LOGOUT.HREF)
                .and('have.text', NAVIGATION.LOGOUT.HREF_TXT)
        })

        it('"Reset App State" link', () => {
            cy.get('a#reset_sidebar_link')
                .should('have.attr', 'href', NAVIGATION.RESET_APP_STATE.HREF)
                .and('have.text', NAVIGATION.RESET_APP_STATE.HREF_TXT)
        })
    })
})