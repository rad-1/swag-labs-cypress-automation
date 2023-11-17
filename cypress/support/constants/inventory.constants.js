// cypress/support/constants/inventory.constants.js

const INVENTORY_LAYOUT = {
    APP_LOGO: 'Swag Labs',
    TITLE: 'Products',
    ADD_PRODUCT_TXT: 'Add to cart',
    REMOVE_PRODUCT_TXT: 'Remove',
}

const INVENTORY_PRODUCTS = [
    {
        NAME: 'Sauce Labs Backpack',
        PRICE: '$29.99',
    },
    {
        NAME: 'Sauce Labs Bike Light',
        PRICE: '$9.99',
    },
    {
        NAME: 'Sauce Labs Bolt T-Shirt',
        PRICE: '$15.99'
    },
    {
        NAME: 'Sauce Labs Fleece Jacket',
        PRICE: '$49.99'
    },
    {
        NAME: 'Sauce Labs Onesie',
        PRICE: '$7.99'
    },
    {
        NAME: 'Test.allTheThings() T-Shirt (Red)',
        PRICE: '$15.99'
    },
]

export { INVENTORY_LAYOUT, INVENTORY_PRODUCTS }