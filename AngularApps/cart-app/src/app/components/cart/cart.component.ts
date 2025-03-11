import { Component, Input } from '@angular/core';
import { CartItem } from '../../data/cartItem';

@Component({
  selector: 'cart',
  imports: [],
  templateUrl: './cart.component.html'
})
export class CartComponent {
  @Input() items: CartItem[] = [];
  
  total: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.calculateTotal();
  }

  calculateTotal(): void {
    console.log(this.items);
    this.total = this.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }
}
