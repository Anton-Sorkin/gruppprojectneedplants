describe("cart page tests", () => {
  it("should create html from CartArray", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-product-cart-link"
    ).click();
    cy.get("#home-cart-button").click();
    cy.get(".cart-picture").should(
      "have.attr",
      "src",
      "../assets/Eucalyptus_cropped.jpg"
    );
    cy.get(".cart-title").should("have.html", "Eucalyptus");
    cy.get(".cart-price").should("have.html", "10:-");
    cy.get(".cart-amount").should("have.html", "1");
  });

  it("should add total price", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-product-cart-link"
    ).click();
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:last .home-product-cart-link"
    ).click();
    cy.get("#home-cart-button").click();
    cy.get("#cart-total").should("have.html", "25");
    cy.get("#cart-vat").should("have.html", "6.25");
  });
  it("should go to checkout when clicked", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-product-cart-link"
    ).click();
    cy.get("#home-cart-button").click();
    cy.get("#cart-makeorder").click();
    cy.url().should("include", "/html/checkout.html");
  });

  it("should add amount", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-product-cart-link"
    ).click();
    cy.get("#home-cart-button").click();
    cy.get(".cart-plus").click();
    cy.get(".cart-amount").should("have.html", "2");
  });

  it("should subtract amount", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-product-cart-link"
    ).click();
    cy.get("#home-cart-button").click();
    cy.get(".cart-plus").click();
    cy.get(".cart-minus").click();
    cy.get(".cart-amount").should("have.html", "1");
  });

  it("should remove item at zero amount", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-product-cart-link"
    ).click();
    cy.get("#home-cart-button").click();
    cy.get(".cart-minus").click();
    cy.get(".cart-section").should("have.html", "");
  });

  it("should remove item", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-product-cart-link"
    ).click();
    cy.get("#home-cart-button").click();
    cy.get(".cart-remove").click();
    cy.get(".cart-section").should("have.html", "");
  });

  it("should be able to push home button", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-product-cart-link"
    ).click();
    cy.get("#home-cart-button").click();
    cy.get("#home-button").click();
    cy.url().should("include", "http://localhost:1234/html/home.html");
  });
});
