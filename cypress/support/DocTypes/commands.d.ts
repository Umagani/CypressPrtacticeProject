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

    }
}
