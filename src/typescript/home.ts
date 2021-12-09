import { productArray } from "../typescript/models/productArray";
import { CartProduct } from "./models/CartClass";

let cartArray: CartProduct[] = [];

window.onload = function () {
  document
    .getElementById("home-cart-button")
    .addEventListener("click", goToCartSite);
  createHomeHtml();
};

function createHomeHtml() {
  let homeAllProductsWrapper: HTMLDivElement = document.getElementById(
    "home-all-products-wrapper"
  ) as HTMLDivElement;

  for (let i = 0; i < productArray.length; i++) {
    let homeSingleProductWrapper = document.createElement("div");
    let homeImageWrapper = document.createElement("div");
    let homeProductImage = document.createElement("img");
    let homeProductCartLink = document.createElement("div");
    let homeBiBagPlus = document.createElement("i");
    let homeProductName = document.createElement("h5");
    let homeProductPrice = document.createElement("h5");

    homeSingleProductWrapper.className = "home-single-product-wrapper";
    homeImageWrapper.className = "home-image-wrapper";
    homeProductCartLink.className = "home-product-cart-link";
    homeBiBagPlus.classList.add("bi", "bi-bag-plus");
    homeProductName.className = "home-product-name";
    homeProductPrice.className = "home-product-price";

    homeImageWrapper.addEventListener("click", () => {
      goToProductPage(i);
    });
    homeProductCartLink.addEventListener("click", () => {
      addProductToCart(i);
    });

    homeProductImage.src = productArray[i].image;
    homeProductName.innerHTML = productArray[i].name;
    homeProductPrice.innerHTML = productArray[i].price.toString() + ":-";

    homeSingleProductWrapper.appendChild(homeImageWrapper);
    homeImageWrapper.appendChild(homeProductImage);
    homeSingleProductWrapper.appendChild(homeProductCartLink);
    homeProductCartLink.appendChild(homeBiBagPlus);
    homeSingleProductWrapper.appendChild(homeProductName);
    homeSingleProductWrapper.appendChild(homeProductPrice);
    homeAllProductsWrapper.appendChild(homeSingleProductWrapper);
  }
}
function goToProductPage(i: number) {
  let productToProductPage = JSON.stringify(productArray[i]);
  sessionStorage.setItem("productToProductPage", productToProductPage);
  window.location.href = "product.html";
}

function addProductToCart(i: number) {
  if (cartArray.length === 0) {
    sendProductFromProductArrayToCartArray(i);
    sendToCartInLocalStorage();
  } else {
    if (cartArray.some((product) => product.name === productArray[i].name)) {
      let findProduct = cartArray.find(
        (theProduct) => theProduct.name === productArray[i].name
      );
      findProduct.amount++;
      sendToCartInLocalStorage();
      console.log(cartArray);
    } else {
      sendProductFromProductArrayToCartArray(i);
      sendToCartInLocalStorage();
    }
  }
}

function sendProductFromProductArrayToCartArray(i) {
  let cartArrayItem: CartProduct = new CartProduct(
    productArray[i].name,
    productArray[i].image,
    productArray[i].price,
    productArray[i].amount
  );
  cartArray.push(cartArrayItem);
  console.log(cartArray);
}

function goToCartSite() {
  window.location.href = "cart.html";
}
function sendToCartInLocalStorage() {
  let cartArrayToLocalStorageJson: string = JSON.stringify(cartArray);
  window.localStorage.setItem("cartArray", cartArrayToLocalStorageJson);
}
