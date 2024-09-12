describe('Basic Practice', () => {

    before(() => {
        cy.visit('/');
    });

    it('basic test', () => {
        cy.GreenCartSearch('Carrot');
        cy.GreenCartAddToCart('56');
    });

});