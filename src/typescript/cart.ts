import { productArray } from "../typescript/models/productArray";

window.onload = function () {
	console.log(productArray);
	createCartHtml();
};
function createCartHtml() {
	let cartSectionWrapper: HTMLDivElement = document.querySelector(
		".cart-section"
	) as HTMLDivElement;

	for (let i = 14; i < productArray.length; i++) {
		let cartItemWrapper = document.createElement("div");
		let cartImage = document.createElement("img");
		let cartName = document.createElement("h5");
		let cartPrice = document.createElement("h5");
		let cartMinus = document.createElement("button");
		let cartAmount = document.createElement("h5");
		let cartplus = document.createElement("button");
		let cartRemove = document.createElement("button");

		cartItemWrapper.className = "cart-item";
		cartImage.className = "cart-picture";
		cartName.className = "cart-title";
		cartPrice.className = "cart-price";
		cartMinus.className = "cart-minus";
		cartAmount.className = "cart-amount";
		cartplus.className = "cart-plus";
		cartRemove.className = "cart-remove";

		cartImage.src = productArray[i].image;
		cartName.innerHTML = productArray[i].name;
		cartPrice.innerHTML = productArray[i].price.toString() + ":-";
		cartMinus.innerHTML = "-";
		cartAmount.innerHTML = productArray[i].amount.toString();
		cartplus.innerHTML = "+";
		cartRemove.innerHTML = "x";

		cartItemWrapper.appendChild(cartImage);
		cartItemWrapper.appendChild(cartName);
		cartItemWrapper.appendChild(cartPrice);
		cartItemWrapper.appendChild(cartMinus);
		cartItemWrapper.appendChild(cartAmount);
		cartItemWrapper.appendChild(cartplus);
		cartItemWrapper.appendChild(cartRemove);

		cartSectionWrapper.appendChild(cartItemWrapper);
	}
}
