describe("web shop product page tests", () => {
  it("should create html product name from choosen product", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-image-wrapper"
    ).click();
    cy.url().should("include", "/html/product.html");
    cy.get("#product-h1").should("have.html", "Eucalyptus");
  });

  it("should create product description from choosen product", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-image-wrapper"
    ).click();
    cy.get("#product-description").should(
      "include.html",
      "Upgrade your life with a wondeful twig"
    );
  });

  it("should create image from choosen product", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-image-wrapper"
    ).click();
    cy.get("#image").should(
      "have.attr",
      "src",
      "../assets/Eucalyptus_cropped.jpg"
    );
  });

  it("should have correct price from shoosen product", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-image-wrapper"
    ).click();
    cy.get("#product-price-2").should("have.html", " 1 ");
  });

  it("should have correct price", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-image-wrapper"
    ).click();
    cy.get("#product-quantity-price").should("have.html", "Total Price: $10");
  });

  it("should be able to click on plus button", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-image-wrapper"
    ).click();
    cy.get("#product-plus-button").click();
    cy.get("#product-quantity-price").should("have.html", "Total Price: $20");
  });

  it("should be able to click on plus button", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-image-wrapper"
    ).click();
    cy.get("#product-plus-button").click();
    cy.get("#product-plus-button").click();
    cy.get("#product-minus-button").click();
    cy.get("#product-quantity-price").should("have.html", "Total Price: $20");
  });

  it("shoud be able to click on cart and go to cart site", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-image-wrapper"
    ).click();
    cy.get("#product-shop-icon").click();
    cy.url().should("include", "/html/cart.html");
  });

  it("should add product price if several", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-image-wrapper"
    ).click();
    cy.get("#product-house-icon").click();
    cy.url().should("include", "/html/home.html");
  });

  it("should display cart counter on in product page", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-product-cart-link"
    ).click();
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-image-wrapper"
    ).click();
    cy.get("#product-cart-counter").should("have.class", "visible");
  });

  it("should add to cart when click on add to cart", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-image-wrapper"
    ).click();
    cy.get("#product-button > button").click();
    cy.url().should("include", "/html/cart.html");
  });
});
