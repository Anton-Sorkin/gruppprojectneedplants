import { Product } from "./models/Product";
import { CartProduct } from "./models/CartClass";

let cartArray: CartProduct[] = [];
let storageasobject: Product;

window.onload = function () {
  getFromSessionStorgage();

  let createimage = document.getElementById("image") as HTMLImageElement;
  createimage.src = storageasobject.image;
  createimage.alt = " image of product ";

  let createtitle = document.getElementById("product-h1") as HTMLHeadingElement;
  createtitle.innerHTML = storageasobject.name;

  let createdescription = document.getElementById(
    "product-description"
  ) as HTMLParagraphElement;
  createdescription.innerHTML = storageasobject.description;

  let createprice = document.getElementById(
    "product-price-2"
  ) as HTMLSpanElement;

  createprice.innerHTML = " " + storageasobject.amount.toString() + " ";

  let productPlusButton: HTMLButtonElement = document.getElementById(
    "product-plus-button"
  ) as HTMLButtonElement;
  productPlusButton.addEventListener("click", usePlusButton);

  let productMinusButton: HTMLButtonElement = document.getElementById(
    "product-minus-button"
  ) as HTMLButtonElement;
  productMinusButton.addEventListener("click", useMinusButton);
};

let homebtn = document.getElementById("product-house-icon") as HTMLDivElement;
homebtn.addEventListener("click", () => {
  window.location.href = "home.html";
});

let shopbtn = document.getElementById("product-shop-icon") as HTMLDivElement;
shopbtn.addEventListener("click", () => {
  window.location.href = "cart.html";
});

/* function getCartFromLocalStorage() {
  let cartLS: string = window.localStorage.getItem("cartArray");
  if (!cartLS) {
    sendToCartInLocalStorage();
  } else {
    cartArray = JSON.parse(cartLS);
  }
} */

function getFromSessionStorgage() {
  let sessionST = window.sessionStorage.getItem("productToProductPage");
  storageasobject = JSON.parse(sessionST);
}

function sendToSeassionStorage() {
  let storageasobjectJson: string = JSON.stringify(storageasobject);
  window.sessionStorage.setItem("productToProductPage", storageasobjectJson);
}

function usePlusButton() {
  let createprice = document.getElementById(
    "product-price-2"
  ) as HTMLSpanElement;
  getFromSessionStorgage();
  storageasobject.amount++;
  createprice.innerHTML = " " + storageasobject.amount.toString() + " ";
  sendToSeassionStorage();
}

function useMinusButton() {
  let createprice = document.getElementById(
    "product-price-2"
  ) as HTMLSpanElement;
  getFromSessionStorgage();
  if (storageasobject.amount > 1) {
    storageasobject.amount--;
    createprice.innerHTML = " " + storageasobject.amount.toString() + " ";
  }
  sendToSeassionStorage();
}
