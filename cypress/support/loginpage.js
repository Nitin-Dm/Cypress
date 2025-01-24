class LoginPage {
  performLogin(user) {
    // Generate the unique username using Cypress command
    cy.generateUniqueUsername().then((uniqueUsername) => {
      // Use the unique username in the login process
      cy.get("input[name='username']").clear().type(uniqueUsername);
      cy.get("input[name='password']").clear().type(user.password);
      cy.get("input[value='Log In']").click();
    });
  }

  logout() {
    cy.get("a[href*='logout.htm']").click();
  }
}

export default new LoginPage();
