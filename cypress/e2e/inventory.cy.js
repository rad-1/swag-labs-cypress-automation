// cypress/e2e/inventory.cy.js

describe('inventory page', { tags: ['@inventory', '@smoke'] }, () => {
    beforeEach(() => {
        cy.loginViaUi();
    });

    context('user views page', { tags: '@inventorySanity' }, () => {
        it('title is visible', () => {
            cy.get('span.title').should('be.visible').and('have.text', 'Products');
        });

        it('products are visible', () => {
            cy.get('div.inventory_item').should('be.visible').and('have.length', 6);
        });
    });
});
