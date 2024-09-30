import HomePage from '../../support/PageObjects/homePage';



const homePage = new HomePage();

describe('POM Test for Home page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Create a test for Home page in POM Model', () => {
        homePage.nameInputBox().clear().type('Uma');
        homePage.getEmail().clear().type('uma@gmail.com');
    });

});