export class Product {
  name: string;
  image: string;
  description: string;
  price: number;
  amount: number;
  constructor(
    name: string,
    image: string,
    description: string,
    price: number,
    amount: number
  ) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.price = price;
    this.amount = amount;
  }
}
