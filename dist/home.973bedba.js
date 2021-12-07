//import { productArray } from "../typescript/models/productArray";
window.onload = function () {
  createHomeHtml();
};
function createHomeHtml() {
  let homeAllProductsWrapper = document.getElementById(
    "home-all-products-wrapper"
  );
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
    homeBiBagPlus.classList.add("bi bi-bag-plus");
    homeProductName.className = "home-product-name";
    homeProductPrice.className = "home-product-price";
    homeSingleProductWrapper.addEventListener("click", () => {
      goToProduct();
    });
    homeProductCartLink.addEventListener("click", () => {
      addProductToCart();
    });
    homeProductImage.src = productArray[i].image;
    homeProductName.innerHTML = productArray[i].name;
    homeProductPrice.innerHTML = productArray[i].price.toString();
    homeSingleProductWrapper.appendChild(homeImageWrapper);
    homeImageWrapper.appendChild(homeProductImage);
    homeImageWrapper.appendChild(homeProductCartLink);
    homeProductCartLink.appendChild(homeBiBagPlus);
    homeSingleProductWrapper.appendChild(homeProductName);
    homeSingleProductWrapper.appendChild(homeProductPrice);
    homeAllProductsWrapper.appendChild(homeSingleProductWrapper);
  }
}
function goToProduct() {}
function addProductToCart() {}

//# sourceMappingURL=home.973bedba.js.map
