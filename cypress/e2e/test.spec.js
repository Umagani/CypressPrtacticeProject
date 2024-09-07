describe('Green Card Application Base Test', () => {

    beforeEach('', () => {
        cy.visit('/');
    });

    it('Add to Cart Test', () => {
        cy.get('input[placeholder="Search for Vegetables and Fruits"]').clear().type('Brinjal');

    });

    it('t2', () => {
        cy.get('input[placeholder="Search for Vegetables and Fruits"]').clear().type('carrot');
    });

});