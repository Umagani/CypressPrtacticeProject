declare class HomePage {
    nameInputBox(): Cypress.Chainable<JQuery<HTMLElement>>;
    twoWayBindInputBox(): Cypress.Chainable<JQuery<HTMLElement>>;
    getEmail(): Cypress.Chainable<JQuery<HTMLElement>>;
    getGender(): Cypress.Chainable<JQuery<HTMLElement>>;
    getEntrepreneur(): Cypress.Chainable<JQuery<HTMLElement>>;
    getShopTab(): Cypress.Chainable<JQuery<HTMLElement>>;
    getCheckbox(): Cypress.Chainable<JQuery<HTMLElement>>;
}

export default HomePage;
