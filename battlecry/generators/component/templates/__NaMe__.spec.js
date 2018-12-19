describe("__NaMe__", () => {
  it("Renders", function() {
    cy.visit("/?selectedKind=__NaMe__&selectedStory=default");

    cy.get("#storybook-preview-iframe").then($iframe => {
      const doc = $iframe.contents();
      iget(doc, ".__NaMe__").should("exist");
    });
  });
});

function iget(doc, selector) {
  return cy.wrap(doc.find(selector));
}
