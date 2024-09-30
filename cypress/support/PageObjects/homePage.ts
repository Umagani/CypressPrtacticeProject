class HomePage {

    nameInputBox() {
        return cy.get('input[name="name"]:nth-child(2)')
    }

    twoWayBindInputBox() {
        return cy.get('input[name="name"]:nth-child(1)')
    }

    getEmail() {
        return cy.get('[name="email"]')
    }

    getGender() {
        return cy.get('[id="exampleFormControlSelect1"]')
    }

    getEntrepreneur() {
        return cy.get('[id="inlineRadio3"]')
    }

    getShopTab() {
        return cy.get('[class="navbar-nav"] li a').last().contains('Shop')
    }

}
export default HomePage;