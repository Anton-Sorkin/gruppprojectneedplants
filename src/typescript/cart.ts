import { CartProduct } from "./models/CartClass";

let cartArray: CartProduct[] = [];
window.onload = function () {
	getCartFromLocalStorage();
	createCartHtml();
	calculateTotal();
	calculateVat();
};
function createCartHtml(): void {
	let cartSectionWrapper: HTMLDivElement = document.querySelector(
		".cart-section"
	) as HTMLDivElement;

	for (let i = 0; i < cartArray.length; i++) {
		let cartItemWrapper = document.createElement("div");
		let cartImage = document.createElement("img");
		let cartName = document.createElement("h5");
		let cartPrice = document.createElement("h5");
		let cartMinus = document.createElement("button");
		let cartAmount = document.createElement("h5");
		let cartplus = document.createElement("button");
		let cartRemove = document.createElement("button");
		let cartTotal = document.createElement("h5");
		let cartOrder = document.createElement("button");

		cartItemWrapper.className = "cart-item";
		cartImage.className = "cart-picture";
		cartName.className = "cart-title";
		cartPrice.className = "cart-price";
		cartMinus.className = "cart-minus";
		cartAmount.className = "cart-amount";
		cartplus.className = "cart-plus";
		cartRemove.className = "cart-remove";
		cartTotal.className = "cart-total";
		cartOrder.className = "cart-makeorder";

		cartImage.src = cartArray[i].image;
		cartName.innerHTML = cartArray[i].name;
		cartPrice.innerHTML = cartArray[i].price.toString() + ":-";
		cartMinus.innerHTML = "-";
		cartAmount.innerHTML = cartArray[i].amount.toString();
		cartplus.innerHTML = "+";
		cartRemove.innerHTML = "x";
		cartOrder.innerHTML = "Make Order";

		cartItemWrapper.appendChild(cartImage);
		cartItemWrapper.appendChild(cartName);
		cartItemWrapper.appendChild(cartPrice);
		cartItemWrapper.appendChild(cartMinus);
		cartItemWrapper.appendChild(cartAmount);
		cartItemWrapper.appendChild(cartplus);
		cartItemWrapper.appendChild(cartRemove);

		cartSectionWrapper.appendChild(cartItemWrapper);

		cartOrder.addEventListener("click", () => {
			goToCheckoutPage();
		});
		let cartFooter = document.querySelector(".cart-footer");
		cartFooter.appendChild(cartOrder);

		let removeItem = document.querySelector(".cart-remove");
		removeItem.addEventListener("click", removeThing);
	}
	function removeThing() {
		let removeItem = document.querySelector(".cart-remove");

		let todo = removeItem.parentElement;
		todo.remove();
		cartArray.splice(0, 1);
	}
}

function goToCheckoutPage() {
	let toCheckoutPage = JSON.stringify(cartArray);
	localStorage.setItem("toCheckoutPage", toCheckoutPage);
	window.location.href = "checkout.html";
}

function calculateTotal() {
	let cartTValues: number[] = [];
	for (let i = 0; i < cartArray.length; i++) {
		const element = cartArray[i].price;
		let newElement = element * cartArray[i].amount;
		cartTValues.push(newElement);
	}
	let cartSetValues: number[] = cartTValues;
	let fsum = 0;
	for (let i = 0; i < cartSetValues.length; i++) {
		fsum += cartSetValues[i];
	}
	let totalSum = fsum.toString();
	let cartTotal = document.createElement("h5");
	cartTotal.className = "cart-total";
	cartTotal.innerHTML = totalSum;
	let cartFooter = document.querySelector(".cart-footer");
	cartFooter.appendChild(cartTotal);
}

function calculateVat() {
	let cartVValues: number[] = [];
	for (let i = 0; i < cartArray.length; i++) {
		const element = cartArray[i].price;
		let newElement = element * cartArray[i].amount;
		cartVValues.push(newElement);
	}
	let cartSetVValues: number[] = cartVValues;
	let vsum = 0;

	for (let i = 0; i < cartSetVValues.length; i++) {
		vsum += cartSetVValues[i] / 4;
	}

	let totalVSum = vsum.toString();
	let cartVat = document.createElement("h6");
	cartVat.className = "cart-vat";
	cartVat.innerHTML = totalVSum;
	let cartFooter = document.querySelector(".cart-footer");
	cartFooter.appendChild(cartVat);
}
function getCartFromLocalStorage() {
	let cArray: string = window.localStorage.getItem("cartArray");
	cartArray = JSON.parse(cArray);
	console.log(cartArray);
}
