// cypress/e2e/inventory.cy.js

import { INVENTORY_PAGE } from '../support/constants'

describe('inventory page', { tags: ['@inventory', '@smoke'] }, () => {
    beforeEach(() => {
        cy.loginViaUi()
    })

    context('user can view page', { tags: '@inventorySanity' }, () => {
        it('app logo is visible', () => {
            cy.get('div.app_logo')
                .should('be.visible')
                .and('have.text', INVENTORY_PAGE.APP_LOGO_TXT)
        })

        it('title is visible', () => {
            cy.get('span.title')
                .should('be.visible')
                .and('have.text', INVENTORY_PAGE.TITLE_TXT)
        })

        it('six products are visible', () => {
            cy.get('div.inventory_item')
                .should('be.visible')
                .and('have.length', 6)
        })

        it('product names and prices are visible', () => {
            INVENTORY_PAGE.PRODUCTS.forEach((product, index) => {
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

    context('user can sort products', {
        tags: '@inventorySorting'
    }, () => {
        it('ascending by name', () => {
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

        it('descending by name', () => {
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

        it('ascending by price', () => {
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

        it('descending by price', () => {
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

    context('user can interact with products', () => {
        context('add products to cart', () => {
            it('add single product to cart', () => {
                cy.getBySel('add-to-cart-sauce-labs-backpack').click()

                cy.getBySel('remove-sauce-labs-backpack')
                    .should('be.visible')
                    .and('have.text', INVENTORY_PAGE.REMOVE_PRODUCT_TXT)

                cy.getRemoveBtnCount().then(($expectedProductCount) => {
                    cy.get('span.shopping_cart_badge')
                        .should('have.text', `${$expectedProductCount}`)
                })
            })

            it('add multiple products to cart', () => {
                cy.getBySel('add-to-cart-sauce-labs-bolt-t-shirt').click()
                cy.getBySel('add-to-cart-sauce-labs-fleece-jacket').click()
                cy.getBySel('add-to-cart-sauce-labs-onesie').click()

                cy.getBySel('remove-sauce-labs-bolt-t-shirt')
                    .should('be.visible')
                    .and('have.text', INVENTORY_PAGE.REMOVE_PRODUCT_TXT)
                cy.getBySel('remove-sauce-labs-fleece-jacket')
                    .should('be.visible')
                    .and('have.text', INVENTORY_PAGE.REMOVE_PRODUCT_TXT)
                cy.getBySel('remove-sauce-labs-onesie')
                    .should('be.visible')
                    .and('have.text', INVENTORY_PAGE.REMOVE_PRODUCT_TXT)

                cy.getRemoveBtnCount().then(($expectedProductCount) => {
                    cy.get('span.shopping_cart_badge')
                        .should('have.text', `${$expectedProductCount}`)
                })
            })
        })

        context('remove products from cart', () => {
            beforeEach(() => {
                cy.getBySel('add-to-cart-sauce-labs-bolt-t-shirt').click()
                cy.getBySel('add-to-cart-sauce-labs-fleece-jacket').click()
                cy.getBySel('add-to-cart-sauce-labs-onesie').click()
            })

            it('remove single product from cart', () => {
                cy.getBySel('remove-sauce-labs-bolt-t-shirt').click()

                cy.getBySel('add-to-cart-sauce-labs-bolt-t-shirt')
                    .should('be.visible')
                    .and('have.text', INVENTORY_PAGE.ADD_PRODUCT_TXT)

                cy.getRemoveBtnCount().then(($expectedProductCount) => {
                    cy.get('span.shopping_cart_badge')
                        .should('have.text', `${$expectedProductCount}`)
                })
            })

            it('remove multiple products from cart', () => {
                cy.getBySel('remove-sauce-labs-bolt-t-shirt').click()
                cy.getBySel('remove-sauce-labs-fleece-jacket').click()

                cy.getBySel('add-to-cart-sauce-labs-bolt-t-shirt')
                    .should('be.visible')
                    .and('have.text', INVENTORY_PAGE.ADD_PRODUCT_TXT)
                cy.getBySel('add-to-cart-sauce-labs-fleece-jacket')
                    .should('be.visible')
                    .and('have.text', INVENTORY_PAGE.ADD_PRODUCT_TXT)

                cy.getRemoveBtnCount().then(($expectedProductCount) => {
                    cy.get('span.shopping_cart_badge')
                        .should('have.text', `${$expectedProductCount}`)
                })
            })

            it('remove all products from cart', () => {
                cy.getBySel('remove-sauce-labs-bolt-t-shirt').click()
                cy.getBySel('remove-sauce-labs-fleece-jacket').click()
                cy.getBySel('remove-sauce-labs-onesie').click()

                cy.getBySel('add-to-cart-sauce-labs-bolt-t-shirt')
                    .should('be.visible')
                    .and('have.text', INVENTORY_PAGE.ADD_PRODUCT_TXT)
                cy.getBySel('add-to-cart-sauce-labs-fleece-jacket')
                    .should('be.visible')
                    .and('have.text', INVENTORY_PAGE.ADD_PRODUCT_TXT)
                cy.getBySel('add-to-cart-sauce-labs-onesie')
                    .should('be.visible')
                    .and('have.text', INVENTORY_PAGE.ADD_PRODUCT_TXT)

                cy.get('span.shopping_cart_badge').should('not.exist')
            })
        })
    })
})