describe("Web shop home page tests", () => {
  it("should create html from productArray", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(".home-single-product-wrapper:first .home-product-name").should(
      "have.html",
      "Eucalyptus"
    );
    cy.get(".home-single-product-wrapper:first .home-product-price").should(
      "have.html",
      "10:-"
    );
  });

  it("should go to cart when click on cart", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get("#home-cart-button").click();
    cy.url().should("include", "/html/cart.html");
  });

  it("should add product to cart click add to cart", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-product-cart-link"
    ).click();
    cy.get("#cart-counter").should("have.class", "visible");
  });

  it("should go to product page when clicking on product", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-image-wrapper"
    ).click();
    cy.url().should("include", "/html/product.html");
  });

  it("should show image on page", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-image-wrapper > img"
    );
    cy.should("have.attr", "src", "../assets/Eucalyptus_cropped.jpg");
  });
});
