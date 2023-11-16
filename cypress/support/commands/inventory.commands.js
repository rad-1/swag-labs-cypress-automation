// cypress/support/inventory.commands.js

Cypress.Commands.add('getSortedProductNames', () => {
    let productNamesArr = []

    cy.get('div.inventory_item_name').each(($productNameEl) => {
        const productNameText = $productNameEl.text()
        productNamesArr.push(productNameText)
    })

    return cy.wrap(productNamesArr)
})

Cypress.Commands.add('getSortedProductPrices', () => {
    let productPricesArr = []

    cy.get('div.inventory_item_price').each(($productPriceEl) => {
        const productPriceText = $productPriceEl.text()
        const productPriceValue = parseFloat(productPriceText.replace('$', ''))
        productPricesArr.push(productPriceValue)
    })

    return cy.wrap(productPricesArr)
})