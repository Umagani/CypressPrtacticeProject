/// <reference types="cypress" />

declare namespace Cypress {

    interface Chainable<Subject> {
        /**
         * Custom command to type a few random words into input elements
         * @param count=3
         * @example cy.get('input').typeRandomWords()
        */

        /**
        * this custom command used to search the fruit in search bar for Green Cart Application.
        * @param searchText - used to search the vegetable item.
        * @example cy.GreenCartSearch('carrot').
        */
        GreenCartSearch(searchText: string): Chainable<Element>; // we ca  use
        //GreenCartSearch(searchText: string): void;

        /**
        * custom command for add to cart to  select the quantity and also add the fruit in the cart for Green Cart Application.
        * @param decision - is a three types of action to perform "increment" or "decrement" or "quantity selection".
        * @example cy.GreenCartAddToCart('increment').
        * @example cy.GreenCartAddToCart('decrement').
        * @example cy.GreenCartAddToCart(56).
        */
        GreenCartAddToCart(decision: string | number): Chainable<Element | number>;

        /**
       * this custom command used to compare the fruit in search bar with fixture data for Green Cart Application.
       * @param vegeName - used to compare the vegetable item.
       * @example cy.CompareFruitName('carrot').
       */
        CompareFruitName(vegeName: string): Chainable<Element>; // we ca  use

        /**
         * this custom command used to search the fruit in search bar for Green Cart Application.
         * @param selectors - used to enter the table CSS Selector class name.
         * @example cy.ColumnCount("cartTable").
         */
        ColumnCount(selectors: string): Chainable<Element>;

        /**
        * this custom command used to search the fruit in search bar for Green Cart Application.
        * @param vegetableName - used to enter the vegetable name we want to compare.
        * @example cy.VegetableCostPrice('carrot').
        */
        VegetableCostPrice(vegetableName: string): Chainable<Element>;


        /**
        * this custom command used to search the fruit in search bar for Green Cart Application.
        * @param vegetableName - used to enter the vegetable name we want to compare.
        * @example cy.VegetableCostPrice('carrot').
        */

        /**
        * this custom command used to search the fruit in search bar for Green Cart Application.
        * @param username - this is an optional parameter and user used to enter the userName  
        * @param password - this is an optional parameter and user used to enter the password  
        * @example cy.BasicLoginTest('username','password').
        */
        BasicLoginTest(username?: string, password?: string): void;
    }
}
