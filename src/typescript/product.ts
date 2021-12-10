
import { Product } from "./models/Product";

window.onload = function () {

	let storageasobject: Product =  JSON.parse(sessionStorage.getItem("productToProductPage")) || new Product("test", "", "desc", 100, 1);
	
	// let storageasobject: Product = JSON.parse(theobjectfromstorage);

	console.log(storageasobject);

	
	let createimage = document.getElementById("image") as HTMLImageElement;
	createimage.src = storageasobject.image;
	createimage.alt = " image of product ";

	let createtitle = document.getElementById("product-h1") as HTMLHeadingElement;
	createtitle.innerHTML = storageasobject.name;

	let createdescription = document.getElementById("product-description") as HTMLParagraphElement;
	createdescription.innerHTML = storageasobject.description;

	let createprice = document.getElementById("product-price-2") as HTMLSpanElement;
	
	createprice.innerHTML = "<strong>ssdads</strong>" + " " + storageasobject.price.toString();

}

	let homebtn = document.getElementById("product-house-icon") as HTMLDivElement;
	homebtn.addEventListener("click", () =>{window.location.href = ("home.html")});

	let shopbtn = document.getElementById("product-shop-icon") as HTMLDivElement;
	shopbtn.addEventListener("click", () => {window.location.href = ("cart.html")});