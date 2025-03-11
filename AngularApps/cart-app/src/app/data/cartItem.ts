import { Product } from "../models/products";

export class CartItem {
  product!: Product;
  quantity: number = 0;
}