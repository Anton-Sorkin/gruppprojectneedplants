describe("Button testing", () => {
	it("Should go to home", () => {
		cy.visit("http://localhost:1234");
		cy.get(".home-button").click();
	});

	it("Should go to checkout", () => {
		cy.visit("http://localhost:1234");
		cy.get(".cart-makeorder").click();
	});
});
