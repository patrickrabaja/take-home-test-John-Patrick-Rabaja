export class LoginPage {
  loginWithFacebook(username: string, password: string) {
    cy.origin(
      "https://www.facebook.com",
      { args: { username, password } },
      ({ username, password }) => {
        cy.get("#email").click();
        cy.get("#email").type(username, { log: false }); //to prevent revealing info in results
        cy.get("#pass").click();
        cy.get("#pass").type(password, { log: false }); //to prevent revealing info in results
        cy.get("#login").click();
      }
    );
  }

  loginWithGoogle(username: string, password: string) {
    cy.origin(
      "https://accounts.google.com",
      { args: { username, password } },
      ({ username, password }) => {
        cy.get("#email").click();
        cy.get("#email").type(username, { log: false }); //to prevent revealing info in results
        cy.get("#pass").click();
        cy.get("#pass").type(password, { log: false }); //to prevent revealing info in results
        cy.get("#login").click();
      }
    );
  }
}
