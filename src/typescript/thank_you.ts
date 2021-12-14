import { CartProduct } from "./models/CartClass";

let cartArray: CartProduct[] = [];

window.onload = function () {
  thankYouCreateCartHtml();
  let homeButton = document.getElementById("thank-you-continue-shopping");
  homeButton.addEventListener("click", continueShopping);
};

function thankYouCreateCartHtml() {
  getCartFromLocalStorage();
  totalPrice();
  let thankYouYourCartWrapper: HTMLDivElement = document.getElementById(
    "thank-you-your-cart-wrapper"
  ) as HTMLDivElement;

  for (let i = 0; i < cartArray.length; i++) {
    let thankYouProductWrapper: HTMLDivElement = document.createElement("div");
    let thankYouPricewrapper: HTMLDivElement = document.createElement("div");
    let thankyouTextWrapper: HTMLDivElement = document.createElement("div");
    let thankYouProductName: HTMLParagraphElement = document.createElement("p");
    let thankYouProductAmount: HTMLParagraphElement = document.createElement(
      "p"
    );
    let thankYouProductPrice: HTMLParagraphElement = document.createElement(
      "p"
    );
    let thankYouProductImageContainer: HTMLDivElement = document.createElement(
      "div"
    );
    let thankYouProductImage: HTMLImageElement = document.createElement("img");
    thankYouPricewrapper.className = "thank-you-price-wrapper";
    thankyouTextWrapper.className = "thank-you-text-wrapper";
    thankYouProductWrapper.className = "thank-you-product-wrapper";
    thankYouProductName.className = "thank-you-product-name";
    thankYouProductAmount.className = "thank-you-product-amount";
    thankYouProductPrice.className = "thank-you-procuct-price";
    thankYouProductImageContainer.className =
      "thank-you-product-image-container";
    thankYouProductImage.className = "thank-you-product-image";

    thankYouProductName.innerHTML = cartArray[i].name;
    thankYouProductPrice.innerHTML = "$" + cartArray[i].price.toString();
    thankYouProductAmount.innerHTML =
      cartArray[i].amount.toString() + " x" + " ";
    thankYouProductImage.src = cartArray[i].image;

    thankyouTextWrapper.appendChild(thankYouProductName);
    thankYouPricewrapper.appendChild(thankYouProductAmount);
    thankYouPricewrapper.appendChild(thankYouProductPrice);
    thankyouTextWrapper.appendChild(thankYouPricewrapper);
    thankYouProductImageContainer.appendChild(thankYouProductImage);
    thankYouProductWrapper.appendChild(thankyouTextWrapper);
    thankYouProductWrapper.appendChild(thankYouProductImageContainer);
    thankYouProductWrapper.appendChild(thankyouTextWrapper);

    thankYouYourCartWrapper.appendChild(thankYouProductWrapper);
  }
}

function getCartFromLocalStorage() {
  let cArray: string = window.localStorage.getItem("cartArray");
  cartArray = JSON.parse(cArray);
  console.log(cartArray);
}

function totalPrice() {
  let totalPriceParagraph: HTMLParagraphElement = document.getElementById(
    "thank-you-total-price"
  ) as HTMLParagraphElement;
  let total: number = 0;
  cartArray.forEach((quantity) => {
    total += quantity.amount * quantity.price;
  });
  console.log(total);
  totalPriceParagraph.innerHTML = "$" + total.toString();
}

function continueShopping() {
  window.location.href = "home.html";
}
