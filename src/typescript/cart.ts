import { CartProduct } from "./models/CartClass";

let cartArray: CartProduct[] = [];
window.onload = function () {
  getCartFromLocalStorage();
  createCartHtml();
  calculateTotal();
  calculateVat();
  document.getElementById("home-button").addEventListener("click", () => {
    window.location.href = "home.html";
  });
  document
    .getElementById("cart-makeorder")
    .addEventListener("click", goToCheckoutPage);
};
function createCartHtml(): void {
  let cartSectionWrapper: HTMLDivElement = document.querySelector(
    ".cart-section"
  ) as HTMLDivElement;

  getCartFromLocalStorage();
  calculateTotal();
  calculateVat();
  cartSectionWrapper.innerHTML = "";

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

    cartItemWrapper.className = "cart-item";
    cartImage.className = "cart-picture";
    cartName.className = "cart-title";
    cartPrice.className = "cart-price";
    cartMinus.className = "cart-minus";
    cartAmount.className = "cart-amount";
    cartplus.className = "cart-plus";
    cartRemove.className = "cart-remove";
    cartTotal.className = "cart-total";

    cartImage.src = cartArray[i].image;
    cartName.innerHTML = cartArray[i].name;
    cartPrice.innerHTML = cartArray[i].price.toString() + ":-";
    cartMinus.innerHTML = "-";
    cartAmount.innerHTML = cartArray[i].amount.toString();
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

    cartRemove.addEventListener("click", () => {
      removeThing(i);
    });

    cartMinus.addEventListener("click", () => {
      useMinusButton(i);
    });

    cartplus.addEventListener("click", () => {
      usePlusButton(i);
    });
  }
}

function removeThing(i: number) {
  cartArray.splice(i, 1);
  sendToCartInLocalStorage();
  createCartHtml();
}

function goToCheckoutPage() {
  let toCheckoutPage = JSON.stringify(cartArray);
  localStorage.setItem("cartArray", toCheckoutPage);
  window.location.href = "checkout.html";
}

function calculateTotal() {
  let cartTotal = document.getElementById("cart-total");
  cartTotal.innerHTML = "";
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
  cartTotal.innerHTML = totalSum;
}

function calculateVat() {
  let cartVat = document.getElementById("cart-vat");
  cartVat.innerHTML = "";
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
  cartVat.innerHTML = totalVSum;
}

function getCartFromLocalStorage() {
  let cArray: string = window.localStorage.getItem("cartArray");
  cartArray = JSON.parse(cArray);
}

function sendToCartInLocalStorage() {
  let cartArrayToLocalStorageJson: string = JSON.stringify(cartArray);
  window.localStorage.setItem("cartArray", cartArrayToLocalStorageJson);
}

function useMinusButton(i: number) {
  cartArray[i].amount--;
  if (cartArray[i].amount < 1) {
    cartArray.splice(i, 1);
  }
  sendToCartInLocalStorage();
  createCartHtml();
}

function usePlusButton(i: number) {
  cartArray[i].amount++;
  sendToCartInLocalStorage();
  createCartHtml();
}
