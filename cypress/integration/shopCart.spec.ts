describe("cart page tests", () => {
	it("should create html from CartArray", () => {
		cy.visit("http://localhost:1234/html/cart.html");
		cy.get(".cartSectionWrapper:first .cart-item").should("have.html", "<h5></h5>");
	});

	it("should go to checkout when clicked", () => {
		cy.visit("http://localhost:1234/html/home.html");
		cy.get("#cart-makeorder").click();
		cy.url().should("include", "/html/checkout.html");
	});

	it("should add amount", () => {
		cy.visit("http://localhost:1234/html/home.html");
		cy.get(".cartSectionWrapper:first .cart-item").click();
		cy.get(".cart-plus").click();
		cy.get(".cart-amount").should("have.html", "2");
	});

	it("should subtract amount", () => {
		cy.visit("http://localhost:1234/html/home.html");
		cy.get(".cartSectionWrapper:first .cart-item").click();
		cy.get(".cart-minus").click();
		cy.get(".cart-amount").should("have.html", "1");
	});

	it("should remove item", () => {
		cy.visit("http://localhost:1234/html/home.html");
		cy.get(".cartSectionWrapper:first .cart-item").click();
		cy.get(".cart-remove").click();
		cy.get(".cart-item").should("have.html", "");
	});
});
