
import { Product } from "./models/Product";

window.onload = function () {

	let theobjectfromstorage: string =  sessionStorage.getItem("productToProductPage");
	
	let storageasobject: Product = JSON.parse(theobjectfromstorage);

	console.log(storageasobject);

	
	let createimage = document.getElementById("image") as HTMLImageElement;
	createimage.src = storageasobject.image;
	createimage.alt = " image of product ";

	let createtitle = document.getElementById("product-h1") as HTMLHeadingElement;
	createtitle.innerHTML = storageasobject.name;

	let createdescription = document.getElementById("product-description") as HTMLParagraphElement;
	createdescription.innerHTML = storageasobject.description;

	let createprice = document.getElementById("product-price-2") as HTMLSpanElement;
	
	createprice.innerHTML = storageasobject.price.toString();

	
    
}

