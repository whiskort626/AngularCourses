import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/products';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CartComponent } from './cart/cart.component';
import { CartItem } from '../data/cartItem';

@Component({
  selector: 'cart-app',
  imports: [CatalogoComponent, CartComponent],
  templateUrl: './cart-app.component.html'
})
export class CartAppComponent implements OnInit {
  products: Product[] = [];
  items: CartItem[] = [];

  constructor(private service: ProductService) {
  }

  ngOnInit(): void {
    this.products = this.service.findAll();
  }
  
  onAddCart(product: Product) {
    console.log("CartAppComponent" + product);
     this.items =  [ ...this.items, { product: { ...product}, quantity: 1 } ];
  }
}
