describe('Green Cart App With Custom Commands', () => {
    beforeEach('URL Visiting', () => {
        cy.visit('/');
    });

    before(function () {
        cy.fixture('tableDetails/columnsData').then((data) => {
            this.data = data; // `this` now correctly refers to the test context
        });
    });

    it('basic test', function () {

        // cy.GreenCartSearch('Tomato');
        cy.CompareFruitName('Tomato');
        cy.GreenCartAddToCart('increment');

        cy.CompareFruitName('Carrot');
        cy.GreenCartAddToCart(3);
        cy.get('[class="cart-info"] tbody tr td').should('have.length', 6).eq(2).and('contain', '2');
        cy.get('[class="cart-icon"]').click();
        cy.get('[class="cart-preview active"] [class="action-block"] button').should('contain', 'PROCEED TO CHECKOUT').click();
        cy.get('[class="cartTable"]').should('have.class', 'cartTable');
        cy.ColumnCount("cartTable").should('eq', this.data.fixturesColumnCountforGreenCartCheckOutTable);


    });

});
