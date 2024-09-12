// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add('', () => { });


Cypress.Commands.add('GreenCartSearch', (searchText) => {
    cy.get('[class="search-keyword"]').clear().type(searchText);
    cy.get('[class="search-button"]').click();

});

Cypress.Commands.add('GreenCartAddToCart', (decision) => {
    //cy.GreenCartSearch(VegeName);
    cy.get('[class="product"]').should('have.length', 1).within(() => {
        let qtySelection = cy.get('[class="stepper-input"]')
        if (decision === 'increment') {
            qtySelection.find('a[class= "increment"]').click();
        }
        else if (decision === 'decrement') {
            qtySelection.find('a[class="decrement"]').click();
        }
        else if (typeof decision === 'number' && !isNaN(decision)) {
            qtySelection.find('input[class="quantity"]').clear().type(decision.toString());
        }
        else {
            assert.isOk('just buy a product');
        }
        cy.get('.stepper-input > .quantity')
            .invoke('val')
            .then(($value) => {
                const itemQuantity = $value.toString();
                cy.get('.stepper-input > .quantity').should('have.value', itemQuantity);
            })


        cy.get('[class="product-action"]').contains('ADD TO CART').click();
    });

});

