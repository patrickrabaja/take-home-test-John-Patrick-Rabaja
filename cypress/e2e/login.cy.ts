import { LoginPage } from "../pages/login.page";

const loginPage = new LoginPage();

describe("Facebook Auth", () => {
  it("Login with Facebook", () => {
    cy.visit("/"); //URL
    cy.get("#loginWithFacebook").click();
    loginPage.loginWithFacebook("username", "password");
    cy.get("#success").should("be.visible"); //Assert Success Notification
  });
});

describe("Google Auth", () => {
  it("Login with Google", () => {
    cy.visit("/"); //URL
    cy.get("#loginWithGoogle").click();
    loginPage.loginWithGoogle("username", "password");
    cy.get("#success").should("be.visible"); //Assert Success Notification
  });
});

describe("2FA Auth");
