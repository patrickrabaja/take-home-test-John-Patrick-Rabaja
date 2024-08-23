import { LoginPage } from "../pages/login.page";

const loginPage = new LoginPage();

describe("Facebook Auth", () => {
  it("Login with Facebook", () => {
    cy.visit("/login"); //URL
    cy.get("#loginWithFacebook").click();
    loginPage.loginWithFacebook("username", "password");
    cy.get("#success").should("be.visible"); //Assert Assumed Success Notification
  });
});

describe("Google Auth", () => {
  it("Login with Google", () => {
    cy.visit("/login"); //URL
    cy.get("#loginWithGoogle").click();
    loginPage.loginWithGoogle("username", "password");
    cy.get("#success").should("be.visible"); //Assert Assumed Success Notification
  });
});

describe("Local Account", () => {
  it("Login with Local Account", () => {
    cy.visit("/login"); //URL
    cy.get("#email").click();
    cy.get("#email").type("username", { log: false }); //to prevent revealing info in results
    cy.get("#pass").click();
    cy.get("#pass").type("pass", { log: false }); //to prevent revealing info in results
    cy.get("#login").click();
    cy.get("#success").should("be.visible"); //Assert Assumed Success Notification
  });
});
