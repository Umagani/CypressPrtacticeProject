describe('Green cart App Testig with Fixture DATA', () => {

    beforeEach('URL Visiting', () => {
        cy.visit('/');
    });

    it('individual Vegetable Cost Price compare with Fixtures Data', () => {
        cy.fixture('greenCartVegetableCostPrice').then((fixtureFileData) => {
            fixtureFileData.productDeatails.forEach((fixtureVegetableName) => {
                let searchFruitName = 'Carrot';
                let expectedPrice = Number(fixtureVegetableName[searchFruitName]);
                cy.VegetableCostPrice(searchFruitName).should('eq', expectedPrice);
            });
        });
    });


    it('All vegetable Cost Price compare with Fixtures Data', () => {
        cy.fixture('greenCartVegetableCostPrice').then((fixtureFileData) => {
            fixtureFileData.productDeatails.forEach((fixtureKeyValuesData) => {

                for (const vegetableName in fixtureKeyValuesData) {
                    let expectedProductPrice = Number(fixtureKeyValuesData[vegetableName]);
                    cy.VegetableCostPrice(vegetableName).should('eq', expectedProductPrice);
                }


            });
        });
    });


});