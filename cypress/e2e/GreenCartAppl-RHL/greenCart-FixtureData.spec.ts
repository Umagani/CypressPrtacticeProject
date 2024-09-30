describe('Test with Fixtures data', () => {
    let searchFruitName: any;

    beforeEach(() => {
        // cy.fixture('tableDetails/columnsData').then((data) => {
        //  this.data = data;    // this will example of global variable
        cy.visit('/');
        // });
    });

    it('fixtures test with local variable', () => {
        cy.GreenCartSearch('Carrot');
        cy.fixture('tableDetails/columnsData').then((data) => {
            cy.CompareFruitName('Carrot');
            cy.GreenCartAddToCart('56');
            cy.get('[class="cart-info"] tbody tr td').should('have.length', 6).eq(2).and('contain', '1');
            cy.get('[class="cart-icon"]').click();
            cy.get('[class="cart-preview active"] [class="action-block"] button').should('contain', 'PROCEED TO CHECKOUT').click();
            cy.ColumnCount("cartTable").should('eq', data.fixturesColumnCountforGreenCartCheckOutTable);
            // cy.ColumnCount("cartTable").should('eq', this.data.fixturesColumnCountforGreenCartCheckOutTable);
            // if we declare globally like line number 4 & 5, then we can call the fixture date anywhere  as "this.data.fixturesColumnCountforGreenCartCheckOutTable"
        });
    });

    it.only('individual comparison of product price', () => {
        cy.fixture('greenCartVegetableCostPrice').then((fixtureTotalData) => {
            fixtureTotalData.productDetails.forEach((FixtureProductDetailsData: any) => {
                searchFruitName = 'Carrot';

                let expectedPrice = Number(FixtureProductDetailsData[searchFruitName]);
                cy.VegetableCostPrice(searchFruitName).should('eq', expectedPrice);
            });

        });

    });


    it.only('All products comparision  with product price', () => {
        cy.fixture('greenCartVegetableCostPrice').then((fixtureTotalData) => {
            fixtureTotalData.productDetails.forEach((fixturesKeyValuessData: any) => {
                for (const vegetableName in fixturesKeyValuessData) {
                    let expectedProductPrice = Number(fixturesKeyValuessData[vegetableName]);
                    cy.VegetableCostPrice(vegetableName).should('eq', expectedProductPrice);
                };

                // Object.keys(fixturesKeyValuessData).forEach((productDetailsKeys) => {
                //     let vegetableCostPrice = Number(fixturesKeyValuessData[productDetailsKeys]);
                //     // cy.log(vegetableName);
                //     cy.VegetableCostPrice(productDetailsKeys).should('eq', vegetableCostPrice);
                // });

            });
        });

    });

});