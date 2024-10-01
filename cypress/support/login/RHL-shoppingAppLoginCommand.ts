Cypress.Commands.add('BasicLoginTest', (username = Cypress.env('UserName'), password = Cypress.env('Password')) => {
    // cy.visit((Cypress.env(('url')) + "/client/"));  one way

    cy.visit(Cypress.config('baseUrl') + Cypress.env('loginUrl')); // second way -

    //cy.visit('/' + "/client/");   // third way baseUrl + end url
    //cy.visit('/');   // fourth way - baseUrl - in real time we use the same bcoz we have only one application one url
    cy.get('[id="userEmail"]')
        .clear().type(username);
    cy.get('[id="userPassword"]').clear().type(password);
    cy.get('[id="login"]').click();
});