describe("web shop checkout test page", () => {
  it("should show product name on checout page", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-image-wrapper"
    ).click();
    cy.url().should("include", "http://localhost:1234/html/product.html");
    cy.get("#product-button > button").click();
    cy.url().should("include", "/html/cart.html");
    cy.get("#cart-makeorder").click();
    cy.url().should("include", "http://localhost:1234/html/checkout.html");
    cy.get("#title-container > .hej").should("have.html", "Eucalyptus");
  });

  it("should show correct product amount", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-image-wrapper"
    ).click();
    cy.url().should("include", "http://localhost:1234/html/product.html");
    cy.get("#product-button > button").click();
    cy.url().should("include", "/html/cart.html");
    cy.get("#cart-makeorder").click();
    cy.url().should("include", "http://localhost:1234/html/checkout.html");
    cy.get("#amount-checkout-container2 > .hej").should("have.html", "x1");
  });

  it("should show correct price", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-image-wrapper"
    ).click();
    cy.url().should("include", "http://localhost:1234/html/product.html");
    cy.get("#product-button > button").click();
    cy.url().should("include", "/html/cart.html");
    cy.get("#cart-makeorder").click();
    cy.url().should("include", "http://localhost:1234/html/checkout.html");
    cy.get("#totalincenter").should("have.html", "10$");
  });

  it("should be able to click on plus button", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-image-wrapper"
    ).click();
    cy.url().should("include", "http://localhost:1234/html/product.html");
    cy.get("#product-button > button").click();
    cy.url().should("include", "/html/cart.html");
    cy.get("#cart-makeorder").click();
    cy.url().should("include", "http://localhost:1234/html/checkout.html");
    cy.get(".minusbtn").click();
    cy.get("#totalincenter").should("have.html", "20$");
  });

  it("should be able to click on minus button", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-image-wrapper"
    ).click();
    cy.url().should("include", "http://localhost:1234/html/product.html");
    cy.get("#product-button > button").click();
    cy.url().should("include", "/html/cart.html");
    cy.get("#cart-makeorder").click();
    cy.url().should("include", "http://localhost:1234/html/checkout.html");
    cy.get(".minusbtn").click();
    cy.get(".minusbtn").click();
    cy.get(".plusbtn").click();
    cy.get("#totalincenter").should("have.html", "20$");
  });

  it("should be able to click on home button", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-image-wrapper"
    ).click();
    cy.url().should("include", "http://localhost:1234/html/product.html");
    cy.get("#product-button > button").click();
    cy.url().should("include", "/html/cart.html");
    cy.get("#cart-makeorder").click();
    cy.url().should("include", "http://localhost:1234/html/checkout.html");
    cy.get("#checkout-home").click();
    cy.url().should("include", "http://localhost:1234/html/home.html");
  });

  it("should be able write in input fields", () => {
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
  });

  it("should be able choose radio buttons", () => {
    cy.get("#credit").click();
    cy.get("#debit").click();
    cy.get("#paypal").click();
  });

  it("should be able to use dropdown menues", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-image-wrapper"
    ).click();
    cy.url().should("include", "http://localhost:1234/html/product.html");
    cy.get("#product-button > button").click();
    cy.url().should("include", "/html/cart.html");
    cy.get("#cart-makeorder").click();
    cy.url().should("include", "http://localhost:1234/html/checkout.html");
    cy.get("#country").select("Norway").should("have.value", "Norway");
    cy.get("#state")
      .select("Stockholms län")
      .should("have.value", "Stockholms län");
  });

  it("Should be able to do mockup buy", () => {
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
    cy.url().should("include", "http://localhost:1234/html/thank_you.html");
  });

  it("validation should work", () => {
    cy.visit("http://localhost:1234/html/home.html");
    cy.get(
      "#home-all-products-wrapper .home-single-product-wrapper:first .home-image-wrapper"
    ).click();
    cy.url().should("include", "http://localhost:1234/html/product.html");
    cy.get("#product-button > button").click();
    cy.url().should("include", "/html/cart.html");
    cy.get("#cart-makeorder").click();
    cy.url().should("include", "http://localhost:1234/html/checkout.html");
    cy.get("#firstName").type("Ludvig").should("have.attr", "required");
    cy.get("#lastName").type("Thunberg").should("have.attr", "required");
    cy.get("#email").type("aa.se");
    cy.get("#address").type("kallforsvägen 9").should("have.attr", "required");
    cy.get("#address2").type("våning 3");
    cy.get("#zip").type("12432").should("have.attr", "required");
    cy.get("#cc-name").type("9182793418419").should("have.attr", "required");
    cy.get("#cc-number")
      .type("Ludvig Thunberg")
      .should("have.attr", "required");
    cy.get("#cc-expiration").type("1212").should("have.attr", "required");
    cy.get("#cc-cvv").type("123").should("have.attr", "required");
    cy.get("#credit").click();
    cy.get("#country").select("Sweden").should("have.value", "Sweden");
    cy.get("#state")
      .select("Stockholms län")
      .should("have.value", "Stockholms län");
    cy.get("#checkout-submit").click();
    cy.get(".needs-validation").should("have.class", "was-validated");
  });
});
