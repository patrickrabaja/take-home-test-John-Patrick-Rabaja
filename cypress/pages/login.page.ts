export class LoginPage {
  loginWithFacebook(username: string, password: string) {
    cy.origin(
      "https://www.facebook.com",
      { args: { username, password } },
      ({ username, password }) => {
        cy.get("#email").click();
        cy.get("#email").type(username);
        cy.get("#pass").click();
        cy.get("#pass").type(password);
        cy.get("#btnLogin").click();
      }
    );
  }

  loginWithGoogle(username: string, password: string) {
    cy.origin(
      "https://accounts.google.com",
      { args: { username, password } },
      ({ username, password }) => {
        cy.get("#email").click();
        cy.get("#email").type(username);
        cy.get("#pass").click();
        cy.get("#pass").type(password);
        cy.get("#btnLogin").click();
      }
    );
  }
}
