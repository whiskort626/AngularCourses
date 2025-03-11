import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/products';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'catalogo',
  imports: [ProductCardComponent],
  templateUrl: './catalogo.component.html'
})
export class CatalogoComponent {
  @Input() products: Product[] = [];

  @Output() productEventEmitter: EventEmitter<Product> = new EventEmitter<Product>();

  onAddCart(product: Product) {
    console.log(product);
    this.productEventEmitter.emit(product); 
  }
}
