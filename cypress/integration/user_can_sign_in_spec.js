describe("Authentication", () => {
  it("A user signs in and is redirected to /posts", () => {
    // sign up
    cy.visit("/users/new");
    cy.get("#email").type("pmonson@example.com");
    cy.get("#password").type("password");
    cy.get("#firstName").type("Paris");
    cy.get("#lastName").type("Monson");
    cy.get("#username").type("testusername");
    cy.get("#phoneNumber").type("0733704822");
    cy.get("#submit").click();

    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("pmonson@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    cy.url().should("include", "/posts");
    cy.contains("a", "New post");
  });
});
