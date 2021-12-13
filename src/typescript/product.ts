import { Product } from "./models/Product";
import { CartProduct } from "./models/CartClass";

let cartArray: CartProduct[] = [];
let storageasobject: Product;

window.onload = function () {
  getFromSessionStorgage();
  getCartFromLocalStorage();
  checkAmountOnOnload();
  productsInCartArrayCounter();
  calculatePrice();

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

  let productButton: HTMLButtonElement = document.getElementById(
    "product-button"
  ) as HTMLButtonElement;
  productButton.addEventListener("click", addToCart);
};

let homebtn = document.getElementById("product-house-icon") as HTMLDivElement;
homebtn.addEventListener("click", () => {
  window.location.href = "home.html";
});

let shopbtn = document.getElementById("product-shop-icon") as HTMLDivElement;
shopbtn.addEventListener("click", () => {
  window.location.href = "cart.html";
});

function sendToCartInLocalStorage() {
  let cartArrayToLocalStorageJson: string = JSON.stringify(cartArray);
  window.localStorage.setItem("cartArray", cartArrayToLocalStorageJson);
}

function getCartFromLocalStorage() {
  let cartLS: string = window.localStorage.getItem("cartArray");
  if (!cartLS) {
    sendToCartInLocalStorage();
  } else {
    cartArray = JSON.parse(cartLS);
  }
}

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
  calculatePrice();
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
  calculatePrice();
}

function addToCart() {
  getCartFromLocalStorage();
  if (cartArray.some((product) => product.name === storageasobject.name)) {
    let findProduct = cartArray.find(
      (theProduct) => theProduct.name === storageasobject.name
    );
    findProduct.amount += storageasobject.amount;
    let index = cartArray.indexOf(findProduct);
    cartArray.splice(index, 1);
    cartArray.push(storageasobject);
    sendToCartInLocalStorage();
  } else {
    cartArray.push(storageasobject);
  }
  window.location.href = "cart.html";
}

function checkAmountOnOnload() {
  getCartFromLocalStorage();
  getFromSessionStorgage();
  if (cartArray.some((amount) => amount.name === storageasobject.name)) {
    let find = cartArray.find(
      (theAmount) => theAmount.name === storageasobject.name
    );
    storageasobject.amount = find.amount;
  }
  sendToSeassionStorage();
  calculatePrice();
}

function productsInCartArrayCounter() {
  getCartFromLocalStorage();
  let totalItemsInArray: number = 0;
  cartArray.forEach((quantity) => {
    totalItemsInArray += quantity.amount;
  });
  let cartCount: HTMLDivElement = document.getElementById(
    "product-cart-counter"
  ) as HTMLDivElement;
  cartCount.innerHTML = totalItemsInArray.toString();

  if (totalItemsInArray > 0) {
    cartCount.classList.add("visible");
  }
}

function calculatePrice() {
  getFromSessionStorgage();
  let productQuantityPrice: HTMLParagraphElement = document.getElementById(
    "product-quantity-price"
  ) as HTMLParagraphElement;
  let totalPrice = storageasobject.amount * storageasobject.price;
  productQuantityPrice.innerHTML =
    "Total Price: " + "$" + totalPrice.toString();
}
