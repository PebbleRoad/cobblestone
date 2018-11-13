describe("Home page", () => {
  it("Links to the Cobblestone Github repo in new window", function() {
    cy.visit("http://localhost:3000/");
    cy.get("a").should(
      "have.attr",
      "href",
      "https://github.com/PebbleRoad/cobblestone"
    );
    cy.get("a").should("have.attr", "target", "_blank");
  });
});
