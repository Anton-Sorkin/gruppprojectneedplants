describe("Web shop home page tests", () => {
  it("should create html from productArray", () => {
    cy.visit("http://localhost:1234");
    cy.get(".home-single-product-wrapper:first .home-product-name").should(
      "have.html",
      "Eucalyptus"
    );
    cy.get(".home-single-product-wrapper:first .home-product-price").should(
      "have.html",
      "10:-"
    );
  });
  it("should add products to cart at click", () => {
    cy.visit("http://localhost:1234");
    cy.get("#home-cart-button").click();
    cy.url().should("should.include", "cart.html");
  });
});
