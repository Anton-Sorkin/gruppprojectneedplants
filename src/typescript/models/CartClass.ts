export class CartProduct {
  name: string;
  image: string;
  price: number;
  amount: number;
  constructor(name: string, image: string, price: number, amount: number) {
    this.name = name;
    this.image = image;
    this.price = price;
    this.amount = amount;
  }
}
