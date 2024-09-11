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

    cy.get('input[class="search-keyword"]').clear().type(searchText);
    cy.get('button[class="search-button"]').click();
});



Cypress.Commands.add('CompareFruitName', (vegeName) => {
    // Perform the search for the vegetable
    cy.GreenCartSearch(vegeName);

    // Load the fixture data (assuming 'greenCartVegetables.json' is your fixture file)
    cy.fixture('greenCartVegetables').then((fixturevegetables) => {
        // Get the vegetable name from the search result
        cy.get('[class="product"]').find('[class="product-name"]').invoke('text').then(($VegName) => {
            const vegetableNameGivenByCypress = $VegName.toString().trim();

            cy.log(vegetableNameGivenByCypress);
            cy.log(fixturevegetables[vegeName]);

            // Validate the names match
            expect(vegetableNameGivenByCypress).to.equal(fixturevegetables.productDeatils[0][vegeName]);
        });
    });
});


Cypress.Commands.add('GreenCartAddToCart', (decision, vegeName) => {
    cy.get('[class="product"]').should('have.length', 1).as('products').within(() => {
        let qtySelection = cy.get('[class="stepper-input"]');
        if (decision === 'increment') {
            qtySelection.find('a[class="increment"]').click();
        }
        else if (decision === 'decrement') {
            qtySelection.find('a[class="decrement"]').click();
        }
        else if (typeof decision === 'number' && !isNaN(decision)) {
            qtySelection.find('input[class="quantity"]').clear().type(decision.toString());
        }
        else {
            assert.isOk('just one item i want to buy');
        }
        cy.get('[class="product-action"] button').contains('ADD TO CART').click();
    });

});

Cypress.Commands.add('ColumnCount', (selectors) => {
    const tableSelector = `[class= ${selectors}]`
    cy.get(tableSelector).find('thead tr td').its('length')
        .then((tableCount) => tableCount);
    // .then((tableCount) => { return cy.log(tableCount); })
});

Cypress.Commands.add('VegetableCostPrice', (vegetableName) => {
    cy.GreenCartSearch(vegetableName);
    // cy.fixture('greenCartVegetableCostPrice').then((fixturesData) => {
    cy.get('[class="product"] p[class="product-price"]')
        .invoke('text')
        .then(($costPrice) => {
            let productPrice = $costPrice.toString().trim();
            let vegetableCost = Number(productPrice);
            return vegetableCost;

        });
    // });
});

