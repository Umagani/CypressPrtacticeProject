describe('Rahul Shetty test for learn .each and as and jQuery', () => {

    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl') + Cypress.env('GreenCartUrl'));  // using baseUrl with environment 
        //cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');  // url using hardcoded 
        // cy.get('[class="product"]').should('have.length', 30);
    });

    it('.each Test in Cypress Iterate every element', () => {
        cy.GreenCartSearch('Ca');

        cy.get('[class="products"]:visible').find('[class="product"]').each(($el) => {
            const textVege = $el.find('h4[class="product-name"]').text();
            if (textVege.includes('Carrot')) {
                cy.wrap($el).find('button').click();
            }
        });

        // 2. it is just normally selected a product with .eq() method
        cy.get('[class="products"] [class="product"]').eq(2).contains('ADD TO CART').click();
    });

    it('.JQuery used to extract the text from web element and aliasing the reuse locator "@as" ', () => {
        cy.get('[class="brand greenLogo"]').then((LogoElement) => {
            cy.log(LogoElement.text());   // GREENKART

        });

        //this is the best practice and also this is usefull for not only text and also for value we can use this method
        cy.get('[class="brand greenLogo"]').as('brand').invoke('text').then((element) => {
            const textLogo = element.trim().toString();
            cy.log(textLogo);
            cy.get('@brand').should('contain', 'GREENKART');
            cy.get('@brand').should('contain', textLogo);

            expect('GREENKART').to.eq(textLogo);   // explicit assertion


        });
    });


    it('wikipedia Test', () => {
        cy.visit('https://www.wikipedia.org/');
        cy.get('[class="other-projects"] [class="other-project"]').as('projects').should('have.length', 13);
        cy.get('@projects').each(($el) => {
            const textProject = $el.find('[class="other-project-title jsl10n"]').text();
            if (textProject.includes('Wikiversity')) {
                cy.wrap($el).find('[class="other-project-title jsl10n"]').should('contain', 'Wikiversity').click();
            };
        });
        cy.get('[class="central-textlogo-wrapper"] span').should('include.text', 'Wikiversity');
    });


});