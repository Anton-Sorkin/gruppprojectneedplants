//import { CartProduct } from "./models/CartClass";
import { CartProduct } from "./models/CartClass";
import { Product } from "./models/Product";

let astext: CartProduct[] = [];

window.onload = function(){

    getfromstorage();
    console.log(astext);

}


function getfromstorage(){
   
    let container = document.getElementById("checkout-table")
    
    let fromstorage: string = localStorage.getItem("cartArray");
    let astext: CartProduct[] = JSON.parse(fromstorage);

    let productcontainer = document.getElementById("product-ckeckout-container") as HTMLDivElement;
  
  
    let amountcontainer = document.getElementById("amount-checkout-container2") as HTMLDivElement;
    let amounttext: HTMLTableCellElement = document.createElement("th");
    amountcontainer.appendChild(amounttext);
    amounttext.innerHTML = "amount:";

    let titlecontainer= document.getElementById("title-container") as HTMLTableRowElement;
    titlecontainer.innerHTML = "<strong>products:</strong>";
  

    let productquantity = document.getElementById("product-quantity") as HTMLTableRowElement;
    let qttext: HTMLTableCellElement = document.createElement("th");
    productquantity.appendChild(qttext);
    qttext.innerHTML = "change quantity:";

    let checkkouttotal2 = document.getElementById("title-total") as HTMLTableCellElement;
    let totaltext: HTMLTableCellElement = document.createElement("th");
    checkkouttotal2.appendChild(totaltext);
    totaltext.innerHTML = "total:";
   
    for(let i: number = 0; i<astext.length; i++){

        let productt: HTMLTableCellElement = document.createElement("th");
        titlecontainer.appendChild(productt);
        productt.innerHTML = astext[i].name;
        productt.className = "hej";

        let amountt: HTMLTableCellElement = document.createElement("th");
        amountcontainer.appendChild(amountt);
        amountt.innerHTML = "x" + astext[i].amount;
        amountt.className = "hej";
       
        let amountqt: HTMLTableCellElement = document.createElement("th");
        productquantity.appendChild(amountqt);
        let amountplusbtn: HTMLButtonElement = document.createElement("button");
        amountqt.appendChild(amountplusbtn);
        amountqt.className = "hej";

        let icon: HTMLSpanElement = document.createElement("i");
        amountplusbtn.appendChild(icon);

        icon.className = "fas fa-minus";
        amountplusbtn.className = "plusbtn";

        let icon2: HTMLSpanElement = document.createElement("i");
        icon2.className = "fas fa-plus";

        let amountminusbtn: HTMLButtonElement = document.createElement("button");
        amountqt.appendChild(amountminusbtn);
        amountminusbtn.appendChild(icon2);
        amountminusbtn.className = "minusbtn";

        amountminusbtn.addEventListener("click", ()=> {addamount(i)});
        amountplusbtn.addEventListener("click", () => {subtractamount(i)})
    }
    
    

    let addition: number = 0;

    for(let i = 0; i<astext.length; i++){

        addition += (astext[i].price *= astext[i].amount);
    }

    let totalprice2: HTMLTableCellElement = document.createElement("th");
    checkkouttotal2.appendChild(totalprice2);
    totalprice2.innerHTML= addition + "$";
    totalprice2.id = "totalincenter"
    
	
}


function addamount(i:number){
   
    let fromstorage: string = localStorage.getItem("cartArray");
    let astext2: Product[] = JSON.parse(fromstorage);

    astext2[i].amount++;

    let backtostorage = JSON.stringify(astext2);
    localStorage.setItem("cartArray", backtostorage);

    let productcontainer = document.getElementById("product-ckeckout-container") as HTMLDivElement;
    productcontainer.innerHTML = "";

    let amountcontainer = document.getElementById("amount-checkout-container2") as HTMLDivElement;
    amountcontainer.innerHTML = "";

    let titlecontainer= document.getElementById("title-container") as HTMLDivElement;
    titlecontainer.innerHTML = "";

    let productquantity = document.getElementById("product-quantity") as HTMLTableRowElement;
    productquantity.innerHTML = "";

    let checkkouttotal2 = document.getElementById("title-total") as HTMLTableCellElement;
    checkkouttotal2.innerHTML  = "";   
    getfromstorage();
   //location.reload();
}

function  subtractamount (i:number){

    let fromstorage: string = localStorage.getItem("cartArray");
    let astext2: Product[] = JSON.parse(fromstorage);

    

    astext2[i].amount--;

    let titlecontainer2 = document.getElementById("title-container") as HTMLDivElement;
    
    
    let backtostorage = JSON.stringify(astext2);
    localStorage.setItem("cartArray", backtostorage);

   
    let productcontainer = document.getElementById("product-ckeckout-container") as HTMLDivElement;
    productcontainer.innerHTML = "";

    let amountcontainer = document.getElementById("amount-checkout-container2") as HTMLDivElement;
    amountcontainer.innerHTML = "";

    let titlecontainer= document.getElementById("title-container") as HTMLDivElement;
    titlecontainer.innerHTML = "";

    let productquantity = document.getElementById("product-quantity") as HTMLTableRowElement;
    productquantity.innerHTML = "";

    let checkkouttotal2 = document.getElementById("title-total") as HTMLTableCellElement;
    checkkouttotal2.innerHTML  = "";   
    getfromstorage();
    
    if(astext2[i].amount < 1){
        astext2.splice(i,1);
        let backtostorage = JSON.stringify(astext2);
        localStorage.setItem("cartArray", backtostorage);
    
       
        let productcontainer = document.getElementById("product-ckeckout-container") as HTMLDivElement;
        productcontainer.innerHTML = "";
    
        let amountcontainer = document.getElementById("amount-checkout-container2") as HTMLDivElement;
        amountcontainer.innerHTML = "";
    
        let titlecontainer= document.getElementById("title-container") as HTMLDivElement;
        titlecontainer.innerHTML = "";
    
        let productquantity = document.getElementById("product-quantity") as HTMLTableRowElement;
        productquantity.innerHTML = "";
    
        let checkkouttotal2 = document.getElementById("title-total") as HTMLTableCellElement;
        checkkouttotal2.innerHTML  = "";   

    getfromstorage();
        
    }
}





