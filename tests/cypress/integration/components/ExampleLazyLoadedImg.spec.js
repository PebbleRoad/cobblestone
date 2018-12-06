describe("ExampleLazyLoadedImg", () => {
  // beforeEach(() => {
  //   cy.get('')
  // })

  it("Renders the image eventually", function() {
    cy.visit("/?selectedKind=ExampleLazyLoadedImg&selectedStory=default");

    cy.get("#storybook-preview-iframe").then($iframe => {
      const doc = $iframe.contents();
      iget(doc, "img").should("exist");
    });
  });
});

function iget(doc, selector) {
  return cy.wrap(doc.find(selector));
}
