import { productArray } from "../typescript/models/productArray";
import { CartProduct } from "./models/CartClass";

let cartArray = [];

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
  //loopa igenom cartarray
  //innuti loopen skapa en if
  //villkoret för min if (productArray[i].name === cartArray[j].name)
  /* for (let j = 0; j < cartArray.length; j++) {
    if (productArray[i].name === cartArray[j].name) {
      cartArray[j].amount++;
    } else {
      let cartArrayItem: CartProduct = new CartProduct(
        productArray[i].name,
        productArray[i].image,
        productArray[i].price,
        productArray[i].amount
      );
      cartArray.push(cartArrayItem);
    }
  } */
  if (cartArray.length === 0) {
    let cartArrayItem: CartProduct = new CartProduct(
      productArray[i].name,
      productArray[i].image,
      productArray[i].price,
      productArray[i].amount
    );
    cartArray.push(cartArrayItem);
  } else {
    for (let j = 0; j < cartArray.length; j++) {
      if (productArray[i].name === cartArray[j].name) {
        cartArray[j].amount++;
        //console.log(cartArray[i]);
      } else {
        let cartArrayItem: CartProduct = new CartProduct(
          productArray[i].name,
          productArray[i].image,
          productArray[i].price,
          productArray[i].amount
        );
        cartArray.push(cartArrayItem);
      }
    }
  }

  /* if (
    cartArray.some((doesItExist) => doesItExist.name === productArray[i].name)
  ) {
    
  } */

  /* else {
    for (let j = 0; j < cartArray.length; j++) {
      if (productArray[i].name === cartArray[j].name) {
        if (cartArray[j].amount >= 1) {
          cartArray[j].amount++;
        } else {
          let cartArrayItem: CartProduct = new CartProduct(
            productArray[i].name,
            productArray[i].image,
            productArray[i].price,
            productArray[i].amount
          );
          cartArray[j].amount++;
          cartArray.push(cartArrayItem);
        }
      }
    }
  } */

  /* if (cartArray.some((cartItem) => cartItem.name === productArray[i].name)) {
    if (cartArray[i].amount > 1) {
      cartArray[i].amount++;
    }
  } else {
    let cartArrayItem: CartProduct = new CartProduct(
      productArray[i].name,
      productArray[i].image,
      productArray[i].price,
      productArray[i].amount
    );
    cartArrayItem.amount++;
    cartArray.push(cartArrayItem);
  } */
  /* if (cartArray.includes(productArray[i].name)) {
    if (cartArray[i].amount > 0) {
      cartArray[i].amount++;
    }
  } else {
    let cartArrayItem: CartProduct = new CartProduct(
      productArray[i].name,
      productArray[i].image,
      productArray[i].price,
      productArray[i].amount
    );
    cartArrayItem.amount++;
    cartArray.push(cartArrayItem);
  } */

  /* if (!cartArray.includes(productArray[i].name)) {
    let cartArrayItem: CartProduct = new CartProduct(
      productArray[i].name,
      productArray[i].image,
      productArray[i].price,
      productArray[i].amount
    );
    cartArrayItem.amount++;
  } else {
    cartArray[i].amount++;
  } */
  /* let cartArrayItem: CartProduct = new CartProduct(
    productArray[i].name,
    productArray[i].image,
    productArray[i].price,
    productArray[i].amount
  ); */

  /* if (cartArray.includes(cartArrayItem[i].name)) {
      if (cartArrayItem.amount > 0) {
        cartArrayItem.amount++;
      }
    } else {
      cartArray.push(cartArrayItem);
      cartArrayItem.amount++;
    } */
  /* if (cartArrayItem.amount > 0) {
      cartArrayItem.amount++;
    } else {
      cartArrayItem.amount++;
      cartArray.push(cartArrayItem);
      sendToCartInLocalStorage();
    } */
  console.log(cartArray);
}

function goToCartSite() {
  window.location.href = "cart.html";
}
function sendToCartInLocalStorage() {
  let cartArrayToLocalStorageJson: string = JSON.stringify(cartArray);
  window.localStorage.setItem("cartArray", cartArrayToLocalStorageJson);
}
