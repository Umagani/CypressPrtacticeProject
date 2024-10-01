// npm install -D cypress-iframe          step 1: first  we need to download the iframe plugin 
//<reference types = "Cypress"/>          
///<reference types = "cypress-iframe"/>

import "cypress-iframe"                  // step 2: import the iframe

// step 3: load the frame using (id) or (names) and then perform the actions

describe('Learn handling iframes', () => {
    let searchFruitName: any;

    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl') + Cypress.env('DropDownUrl'));
        //cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    });

    it('learn iframe concepts', () => {
        cy.frameLoaded('[id="courses-iframe"]');
        cy.iframe().find('a[href="mentorship"]')
            .first()
            .should('contain', 'Mentorship')
            .click();
        cy.wait(5000);
        cy.iframe().find('h1[class="pricing-title text-white ls-1"]').should('have.length', 2);
        cy.iframe().find('h1[class="pricing-title text-white ls-1"]').first().should('contain', 'BRONZE');
        cy.iframe().find('h1[class="pricing-title text-white ls-1"]').last().should('contain', 'PLATINUM');

    });
});


