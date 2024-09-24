Cypress.Commands.add('BasicLoginTest', (username = Cypress.env('UserName'), password = Cypress.env('Password')) => {

    cy.visit('/');
    cy.get('[id="userEmail"]')
        .clear().type(username);
    cy.get('[id="userPassword"]').clear().type(password);
    cy.get('[id="login"]').click();
});