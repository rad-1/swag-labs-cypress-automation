// cypress/support/constants.js

export const HAMBURGER_NAV = {
    ALL_ITEMS: {
        HREF: '#',
        HREF_TXT: 'All Items'
    },
    ABOUT: {
        HREF: 'https://saucelabs.com/',
        HREF_TXT: 'About'
    },
    LOGOUT: {
        HREF: '#',
        HREF_TXT: 'Logout'
    },
    RESET_APP_STATE: {
        HREF: '#',
        HREF_TXT: 'Reset App State'
    },
}

export const LOGIN_PAGE = {
    LOGIN_LOGO_TXT: 'Swag Labs',

    CREDENTIALS: {
        VALID_USERNAME: Cypress.env('username'),
        VALID_PASSWORD: Cypress.env('password'),
        INVALID_USERNAME: 'invalid_username',
        INVALID_PASSWORD: 'invalid_password',
        LOCKED_OUT_USERNAME: 'locked_out_user'
    },

    ERRORS: {
        NO_MATCH:
        'Epic sadface: Username and password do not match any user in this service',
        USERNAME_REQUIRED: 'Epic sadface: Username is required',
        PASSWORD_REQUIRED: 'Epic sadface: Password is required',
        LOCKED_OUT: 'Epic sadface: Sorry, this user has been locked out.'
    }
}

export const INVENTORY_PAGE = {
    APP_LOGO_TXT: 'Swag Labs',
    TITLE_TXT: 'Products',
    ADD_PRODUCT_TXT: 'Add to cart',
    REMOVE_PRODUCT_TXT: 'Remove',

    PRODUCTS: [
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
}

export const CART_PAGE = {
    APP_LOGO_TXT: 'Swag Labs',
    TITLE_TXT: 'Your Cart',
}