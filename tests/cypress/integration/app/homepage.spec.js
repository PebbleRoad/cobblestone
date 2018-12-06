describe("Home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Has no detectable a11y violations on load", () => {
    cy.injectAxe();
    cy.checkA11y();
  });

  it("Links to the Cobblestone Github repo in new window", function() {
    cy.get("a").should(
      "have.attr",
      "href",
      "https://github.com/PebbleRoad/cobblestone"
    );
    cy.get("a").should("have.attr", "target", "_blank");
  });
});
