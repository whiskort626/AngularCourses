import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../../models/item';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'form-item',
  imports: [FormsModule],
  templateUrl: './form-item.component.html'
})
export class FormItemComponent {
  @Output() addItemEventEmitter = new EventEmitter();

  private counterId = 4;

  item: any = {
    product: '',
    price: 0,
    quantity: 0
  }

  onSubmit(itemForm: NgForm) {
    if (!itemForm.valid) {
      console.log('FormItemComponent: Form is not valid');
      return;
    } else {
      console.log('FormItemComponent: Item added:', this.item);
      this.addItemEventEmitter.emit({ ...this.item, id: this.counterId++ });
      this.counterId++;
      this.item = {
        product: '',
        price: 0,
        quantity: 0
      }
      itemForm.reset();
      itemForm.resetForm();
    }
  }
}
