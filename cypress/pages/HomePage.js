export class HomePage {

  validateTitle() {
    cy.get('.next-1ib1no1').should("be.visible");
    //cy.get('.next-1ib1no1').should("have.text", "Hello,");
    cy.get('.next-1ib1no1').contains("Hello,");
  }
    
  validateNavigationMenu() {
    cy.get('#open-navigation-menu-mobile').should("be.visible");
  }
    
  logOut() {
    cy.get('#open-navigation-menu-mobile').click()
    cy.get('.next-bve2vl').contains("Log out").scrollIntoView().should("be.visible").click();
  }
    
}