// cypress/e2e/inventory.cy.js

import { PRODUCTS } from '../support/constants/inventory.constants';

describe('inventory page', { tags: ['@inventory', '@smoke'] }, () => {
    beforeEach(() => {
        cy.loginViaUi();
    });

    context('user views page', { tags: '@inventorySanity' }, () => {
        it('title is visible', () => {
            cy.get('span.title').should('be.visible').and('have.text', 'Products');
        });

        it('six products are visible', () => {
            cy.get('div.inventory_item').should('be.visible').and('have.length', 6);
        });

        it('product names and prices are visible', () => {
            PRODUCTS.forEach((product, index) => {
                cy.get('div.inventory_item')
                    .eq(index)
                    .within(() => {
                        cy.get('div.inventory_item_name')
                            .should('be.visible')
                            .and('have.text', product.NAME);
                        cy.get('div.inventory_item_price')
                            .should('be.visible')
                            .and('have.text', product.PRICE);
                    });
            });
        });
    });
});
