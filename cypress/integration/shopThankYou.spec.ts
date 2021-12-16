describe("test for thank you page", () => {
  it("should appear product on page", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-image-wrapper"
    ).click();
    cy.url().should("include", "http://localhost:1234/html/product.html");
    cy.get("#product-button > button").click();
    cy.url().should("include", "/html/cart.html");
    cy.get("#cart-makeorder").click();
    cy.url().should("include", "http://localhost:1234/html/checkout.html");
    cy.get("#firstName").type("Ludvig");
    cy.get("#lastName").type("Thunberg");
    cy.get("#email").type("a@a.se");
    cy.get("#address").type("kallforsvägen 9");
    cy.get("#address2").type("våning 3");
    cy.get("#zip").type("12432");
    cy.get("#cc-name").type("9182793418419");
    cy.get("#cc-number").type("Ludvig Thunberg");
    cy.get("#cc-expiration").type("1212");
    cy.get("#cc-cvv").type("123");
    cy.get("#credit").click();
    cy.get("#country").select("Norway").should("have.value", "Norway");
    cy.get("#state")
      .select("Stockholms län")
      .should("have.value", "Stockholms län");
    cy.get("#checkout-submit").click();
    cy.get(".thank-you-product-name").should("have.html", "Eucalyptus");
  });

  it("should be able to click on continue shopping button", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-image-wrapper"
    ).click();
    cy.url().should("include", "http://localhost:1234/html/product.html");
    cy.get("#product-button > button").click();
    cy.url().should("include", "/html/cart.html");
    cy.get("#cart-makeorder").click();
    cy.url().should("include", "http://localhost:1234/html/checkout.html");
    cy.get("#firstName").type("Ludvig");
    cy.get("#lastName").type("Thunberg");
    cy.get("#email").type("a@a.se");
    cy.get("#address").type("kallforsvägen 9");
    cy.get("#address2").type("våning 3");
    cy.get("#zip").type("12432");
    cy.get("#cc-name").type("9182793418419");
    cy.get("#cc-number").type("Ludvig Thunberg");
    cy.get("#cc-expiration").type("1212");
    cy.get("#cc-cvv").type("123");
    cy.get("#credit").click();
    cy.get("#country").select("Norway").should("have.value", "Norway");
    cy.get("#state")
      .select("Stockholms län")
      .should("have.value", "Stockholms län");
    cy.get("#checkout-submit").click();
    cy.get("#thank-you-continue-shopping").click();
    cy.url().should("include", "http://localhost:1234/html/home.html");
  });

  it("should sum up the price", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-product-cart-link"
    ).click();
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:last .home-product-cart-link"
    ).click();
    cy.get("#home-cart-button").click();
    cy.get("#cart-makeorder").click();
    cy.url().should("include", "http://localhost:1234/html/checkout.html");
    cy.get("#firstName").type("Ludvig");
    cy.get("#lastName").type("Thunberg");
    cy.get("#email").type("a@a.se");
    cy.get("#address").type("kallforsvägen 9");
    cy.get("#address2").type("våning 3");
    cy.get("#zip").type("12432");
    cy.get("#cc-name").type("9182793418419");
    cy.get("#cc-number").type("Ludvig Thunberg");
    cy.get("#cc-expiration").type("1212");
    cy.get("#cc-cvv").type("123");
    cy.get("#credit").click();
    cy.get("#country").select("Norway").should("have.value", "Norway");
    cy.get("#state")
      .select("Stockholms län")
      .should("have.value", "Stockholms län");
    cy.get("#checkout-submit").click();
    cy.get("#thank-you-total-price").should("have.html", "$25");
  });
});
