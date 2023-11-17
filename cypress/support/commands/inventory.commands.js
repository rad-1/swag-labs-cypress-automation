// cypress/support/inventory.commands.js

Cypress.Commands.add('getProductNames', () => {
    let productNamesArr = []

    cy.get('div.inventory_item_name').each(($productNameEl) => {
        const productNameText = $productNameEl.text()
        productNamesArr.push(productNameText)
    })

    return cy.wrap(productNamesArr)
})

Cypress.Commands.add('getProductPrices', () => {
    let productPricesArr = []

    cy.get('div.inventory_item_price').each(($productPriceEl) => {
        let productPricesArr = []
        const productPriceText = $productPriceEl.text()
        const productPriceValue = parseFloat(productPriceText.replace('$', ''))
        productPricesArr.push(productPriceValue)
    })

    return cy.wrap(productPricesArr)
})

Cypress.Commands.add('getRemoveBtnCount', () => {
    // used when expecting num items in cart to eq num remove buttons
    cy.getBySelLike('remove-').then(($removeBtn) => {
        return $removeBtn.length
    })
})
