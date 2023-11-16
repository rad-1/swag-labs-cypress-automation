// cypress/e2e/inventory.cy.js

import { PRODUCTS } from '../support/constants/inventory.constants'

describe('inventory page', { tags: ['@inventory', '@smoke'] }, () => {
    beforeEach(() => {
        cy.loginViaUi()
    })

    context('user can view page', { tags: '@inventorySanity' }, () => {
        it('title is visible', () => {
            cy.get('span.title')
                .should('be.visible')
                .and('have.text', 'Products')
        })

        it('six products are visible', () => {
            cy.get('div.inventory_item')
                .should('be.visible')
                .and('have.length', 6)
        })

        it('product names and prices are visible', () => {
            PRODUCTS.forEach((product, index) => {
                cy.get('div.inventory_item')
                    .eq(index)
                    .within(() => {
                        cy.get('div.inventory_item_name')
                            .should('be.visible')
                            .and('have.text', product.NAME)
                        cy.get('div.inventory_item_price')
                            .should('be.visible')
                            .and('have.text', product.PRICE)
                    })
            })
        })
    })

    context('user can sort products by name', {
        tags: '@inventorySorting'
    }, () => {
        it('by ascending', () => {
            cy.getProductNames().then(($productNames) => {
                const expectedSort = $productNames.sort()

                cy.getBySel('product_sort_container').select('az')

                cy.get('span.active_option')
                    .should('have.text', 'Name (A to Z)')
                cy.getProductNames().then(($newSort) => {
                    expect($newSort).to.eql(expectedSort)
                })
            })
        })

        it('by descending', () => {
            cy.getProductNames().then(($productNames) => {
                const expectedSort = $productNames.sort().reverse()

                cy.getBySel('product_sort_container').select('za')

                cy.get('span.active_option')
                    .should('have.text', 'Name (Z to A)')
                cy.getProductNames().then(($newSort) => {
                    expect($newSort).to.eql(expectedSort)
                })
            })
        })
    })

    context('user can sort products by price', {
        tags: '@inventorySorting'
    }, () => {
        it('by ascending', () => {
            cy.getProductPrices().then(($productPrices) => {
                const expectedSort = $productPrices.sort((a, b) => (a - b))

                cy.getBySel('product_sort_container').select('lohi')

                cy.get('span.active_option')
                    .should('have.text', 'Price (low to high)')
                cy.getProductPrices().then(($newSort) => {
                    expect($newSort).to.eql(expectedSort)
                })
            })
        })

        it('by descending', () => {
            cy.getProductPrices().then(($productPrices) => {
                const expectedSort = $productPrices.sort((a, b) => (b - a))

                cy.getBySel('product_sort_container').select('hilo')

                cy.get('span.active_option')
                    .should('have.text', 'Price (high to low)')
                cy.getProductPrices().then(($newSort) => {
                    expect($newSort).to.eql(expectedSort)
                })
            })
        })
    })
})