describe('Calender testing for Green Cart App', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl') + Cypress.env('GreenCartUrl'));
        // cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/'); // hardcoded url
    });

    it('Create a calender in green cart app', () => {
        cy.contains('Top Deals').invoke('removeAttr', 'target').click();;
        cy.get('[class="table table-bordered"]').should('be.exist');

        const month = '5';
        const date = '18';
        const year = '2027';
        const expectedDate = [month, date, year];

        cy.get('[class="react-date-picker__calendar-button react-date-picker__button"]').click();
        cy.get('[class="react-calendar__navigation"]').click();
        cy.wait(100);
        cy.get('[class="react-calendar__navigation"]').click();

        cy.contains('button', year).click();

        cy.get('.react-calendar__year-view__months__month').eq(Number(month) - 1).click();

        cy.contains('abbr', date).click();

        cy.get(".react-date-picker__inputGroup__input").each(($el, index) => {
            cy.wrap($el).invoke('val').should('eq', expectedDate[index]);
        });



    });

});