import HomePage from '../../support/PageObjects/homePage';

const homePage = new HomePage();
let Fdata: any;

describe('POM Test for Home page', () => {

    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl') + Cypress.env('POMUrl'));
        //cy.visit('/');
    });

    before(() => {
        cy.fixture('pageObj').then((Data) => {
            Fdata = Data;
        });
    });

    it('Create a test for Home page in POM Model', () => {
        cy.fixture('pageObj').then((fixData) => {
            homePage.nameInputBox().clear().type(Fdata.name);     // here Fdata.name is global variable we are using
            homePage.getEmail().clear().type(fixData.email);       // here fixData is local variable we are using

            homePage.getEntrepreneur().should('be.disabled');
            homePage.getGender().select(Fdata.gender1);
            homePage.twoWayBindInputBox().should('have.value', Fdata.name);
            homePage.getCheckbox().check();
            homePage.getShopTab().click();

        });

    });


});