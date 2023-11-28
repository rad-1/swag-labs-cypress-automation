// cypress/e2e/inventory.cy.js

import {
    INVENTORY_PAGE,
    CART_PAGE
} from '../support/constants'

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

    context('user can sort products', { tags: '@inventorySorting' }, () => {
        const getProductNames = () => {
            const productNamesArr = []

            cy.get('div.inventory_item_name').each(($productNameEl) => {
                const productNameText = $productNameEl.text()
                productNamesArr.push(productNameText)
            })

            return cy.wrap(productNamesArr)
        }

        const getProductPrices = () => {
            const productPricesArr = []

            cy.get('div.inventory_item_price').each(($productPriceEl) => {
                const productPriceText = $productPriceEl.text()
                const productPriceValue = parseFloat(productPriceText.replace('$', ''))
                productPricesArr.push(productPriceValue)
            })

            return cy.wrap(productPricesArr)
        }

        it('ascending by name', () => {
            getProductNames().then(($productNames) => {
                const expectedSort = $productNames.sort()

                cy.getBySel('product_sort_container').select('az')

                cy.get('span.active_option')
                    .should('have.text', 'Name (A to Z)')

                getProductNames().then(($newSort) => {
                    expect($newSort).to.eql(expectedSort)
                })
            })
        })

        it('descending by name', () => {
            getProductNames().then(($productNames) => {
                const expectedSort = $productNames.sort().reverse()

                cy.getBySel('product_sort_container').select('za')

                cy.get('span.active_option')
                    .should('have.text', 'Name (Z to A)')

                getProductNames().then(($newSort) => {
                    expect($newSort).to.eql(expectedSort)
                })
            })
        })

        it('ascending by price', () => {
            getProductPrices().then(($productPrices) => {
                const expectedSort = $productPrices.sort((a, b) => (a - b))

                cy.getBySel('product_sort_container').select('lohi')

                cy.get('span.active_option')
                    .should('have.text', 'Price (low to high)')

                getProductPrices().then(($newSort) => {
                    expect($newSort).to.eql(expectedSort)
                })
            })
        })

        it('descending by price', () => {
            getProductPrices().then(($productPrices) => {
                const expectedSort = $productPrices.sort((a, b) => (b - a))

                cy.getBySel('product_sort_container').select('hilo')

                cy.get('span.active_option')
                    .should('have.text', 'Price (high to low)')

                getProductPrices().then(($newSort) => {
                    expect($newSort).to.eql(expectedSort)
                })
            })
        })
    })

    context('user can add and remove products', { tags: '@addAndRemoveInventory' }, () => {
        const addProductsToCart = () => {
            cy.getBySel('add-to-cart-sauce-labs-bolt-t-shirt').click()
            cy.getBySel('add-to-cart-sauce-labs-fleece-jacket').click()
            cy.getBySel('add-to-cart-sauce-labs-onesie').click()

            cy.get('span.shopping_cart_badge').should('have.text', '3')
        }

        it('add single product to cart', () => {
            cy.getBySel('add-to-cart-sauce-labs-backpack').click()

            cy.getBySel('remove-sauce-labs-backpack')
                .should('be.visible')
                .and('have.text', INVENTORY_PAGE.REMOVE_PRODUCT_TXT)

            cy.get('span.shopping_cart_badge').should('have.text', '1')
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

            cy.get('span.shopping_cart_badge').should('have.text', '3')
        })

        it('remove single product from cart', () => {
            addProductsToCart()

            cy.getBySel('remove-sauce-labs-bolt-t-shirt').click()

            cy.getBySel('add-to-cart-sauce-labs-bolt-t-shirt')
                .should('be.visible')
                .and('have.text', INVENTORY_PAGE.ADD_PRODUCT_TXT)

            cy.get('span.shopping_cart_badge').should('have.text', '2')
        })

        it('remove multiple products from cart', () => {
            addProductsToCart()

            cy.getBySel('remove-sauce-labs-bolt-t-shirt').click()
            cy.getBySel('remove-sauce-labs-fleece-jacket').click()

            cy.getBySel('add-to-cart-sauce-labs-bolt-t-shirt')
                .should('be.visible')
                .and('have.text', INVENTORY_PAGE.ADD_PRODUCT_TXT)
            cy.getBySel('add-to-cart-sauce-labs-fleece-jacket')
                .should('be.visible')
                .and('have.text', INVENTORY_PAGE.ADD_PRODUCT_TXT)

            cy.get('span.shopping_cart_badge').should('have.text', '1')
        })

        it('remove all products from cart', () => {
            addProductsToCart()

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

    context('user navigation', { tags: '@inventorySanity' }, () => {
        it('navigate to cart page from cart link', () => {
            cy.get('a.shopping_cart_link').click()

            cy.get('span.title').should('have.text', CART_PAGE.TITLE_TXT)
        })
    })
})
