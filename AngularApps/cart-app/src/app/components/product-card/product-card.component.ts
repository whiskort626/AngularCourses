import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/products';

@Component({
  selector: 'div[product-card]',
  imports: [],
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent {
  @Input() product: Product = new Product();

  @Output() productEventEmitter: EventEmitter<Product> = new EventEmitter<Product>();

  onAddCart(product: Product) {
    console.log(product);
    this.productEventEmitter.emit(product); 
  }
}
