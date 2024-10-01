describe('Checkboxes and DropDowns Tests', () => {

    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl') + Cypress.env('DropDownUrl'));

        //cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    });

    it('learn Checkboxes ".check", ".uncheck" concepts', () => {
        cy.get('[id="checkbox-example"]').should('contain', 'Checkbox Example');

        cy.get('[id="checkBoxOption1"]').check().should('be.checked').and('have.value', 'option1');
        cy.get('[id="checkBoxOption1"]').uncheck().should('not.be.checked').and('have.value', 'option1');

        cy.get('[id="checkBoxOption2"]').check().should('be.checked').and('have.value', 'option2');
        cy.get('[id="checkBoxOption2"]').uncheck().should('not.be.checked').and('have.value', 'option2');

        cy.get('[id="checkBoxOption3"]').check().should('be.checked').and('have.value', 'option3');
        cy.get('[id="checkBoxOption3"]').uncheck().should('not.be.checked').and('have.value', 'option3');

        cy.get('[id="checkbox-example"] input[type="checkbox"]').check(['option1', 'option2']).should('be.checked');
        cy.get('[id="checkbox-example"] input[type="checkbox"]').uncheck(['option1', 'option2']).should('not.be.checked');
    });

    it('learn DropDown with using .select() method', () => {
        // method to handle dropdown without select tag/method or normal dropdown 
        // cy.get('[id="dropdown-class-example"]').click();
        // cy.get('value="option2"').click();

        // dropdown using select method
        cy.get('[id="dropdown-class-example"]').select('option3');
    });

    it('Dynamic dropdown select like input box type slect the dropdown', () => {
        cy.get('input[id="autocomplete"]').as('dynamicDropdown').type('ind');

        cy.get('[class="ui-menu-item"]').as('dynamicDropdownValue').each(($el) => {
            if ($el.text() === "India") {
                cy.wrap($el).click();
            };
        });


        cy.get('@dynamicDropdown').clear().type('us');
        cy.wait(1000);
        cy.get('@dynamicDropdownValue').each(($el) => {
            if ($el.text() === 'Cyprus') {
                cy.wrap($el).click();

            }
        });
    });

    it('Radio Buttons Example', () => {
        cy.get('[class="radioButton"]').first().check().should('be.checked').and('have.value', 'radio1');
        // cy.get('[class="radioButton"]').first().uncheck().should('not.be.checked').and('have.value', 'radio1');
        // uncheck will not work for Radio button it will only for checkboxes
    });

    it('Handle the child window in your page "cy.origin" and "removeAttr" ', () => {
        // window open in the same tab
        //cy.get('[onclick="openWindow()"]').click();

        // window open in another tab // cypress cannot support cross origin browser
        //cy.get('#opentab').click();

        cy.get('[id="opentab"]').invoke('removeAttr', 'target').click();
        //cy.get('[class="navbar-nav ml-auto"] [class="nav-item"] [href="about.html"]').should('contain', 'About us').click();
        // cypress cannot encourage to run the cross domain if it is same domain it works

        // but still we have a origin to choose cross domain it work if we choose as cy.origin
        // cy.origin('href' , () =>{ });
        cy.origin('https://www.qaclickacademy.com/', () => {
            cy.get('[class="navbar-nav ml-auto"] [class="nav-item"] [href="about.html"]').should('contain', 'About us').click();
            cy.contains('Contact').should('be.visible').click();
            cy.get('[class="section-title"] h2').contains('Keep in touch');
        });
    });

    it('learn to  handle the Alerts of "window:alert" and "window:confirm" ', () => {
        // for alert how we do handle 
        cy.get('input[id="name"]').clear().type('uma Ji');
        cy.get('[id="alertbtn"]').should('have.attr', 'value', 'Alert').click();

        cy.on('window:alert', (str) => {
            expect(str).to.eq('Hello uma Ji, share this practice page and share your knowledge');
        });

        //for confirm how to handle
        cy.get('input[id="name"]').clear().type('uma Ji');
        cy.get('[id="alertbtn"]').should('have.attr', 'value', 'Alert').click();

        cy.on('window:confirm', (str) => {
            expect(str).to.eq('Hello uma Ji, Are you sure you want to confirm?');
        });
    });

    it('Learn Mouse over in cypress with JQuery method of "show()" ', () => {
        // if we used "{force : true}" in cypress used to click the invisible element
        cy.get('[id="mousehover"]').invoke('show');
        cy.wait(500);
        cy.contains('Top').click({ force: true });

        cy.url().should('include', 'top');
        cy.url().should('contain', '/#top');
        //cy.contains('Reload').click();
    });

    it('Scroll up and Scroll down', () => {
        //cy.scrollTo('right');   // it scroll to right side
        // cy.scrollTo('left');    // it scroll to left side
        //cy.scrollTo(0, 20000);    //it scroll slow  
        //cy.scrollTo('bottom');   // it scroll to bottom


        cy.get('[id="gf-BIG"] td li:nth-child(1)').eq(1).scrollIntoView();   // it scroll to the particular element view
        // cy.scrollTo('bottom', { easing: 'linear', duration: 1000 }); // it scroll downs slowly to bottom
        // cy.scrollTo('top');

        // how to scroll inside the element we can use the below code
        // cy.get('').then(($el) => {
        //  $el.scrollTop();
    });

    it('Learn handling the web tables, sibling DOM elements of ".next()" and ".each()" ', () => {

        cy.get('[id="product"] tr td:nth-child(2)').each(($el, $index) => {
            const text = $el.text();

            // to find the next value in table w2e use ".next()" 
            // if (text.includes('Python')) {
            //     cy.get('tr td:nth-child(2)').eq($index).next().then((price) => {  
            //         const pricetext = price.text();
            //         expect(pricetext).to.eq('25');
            //     });
            // }

            // to find the previous value  in table we use ".prev()"
            // if (text.includes('Python')) {
            //     cy.get('tr td:nth-child(2)').eq($index).prev().then((text) => {
            //         const nametext = text.text();
            //         expect(nametext).to.eq('Rahul Shetty');
            //     })
            // }

            if (text.includes('Python')) {
                cy.get('tr td:nth-child(1)').eq($index).then((text) => {
                    const nametext = text.text();
                    expect(nametext).to.eq('Rahul Shetty');
                })
            }

            if (text.includes('Python')) {
                cy.get('tr td:nth-child(1)').eq($index).next().then((text) => {
                    const nametext = text.text();
                    expect(nametext).to.includes('Python');
                })
            }

        });

    });
});

