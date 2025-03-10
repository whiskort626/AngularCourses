import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { InvoiceData } from '../data/invoice.data';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private invoices: Invoice[] = InvoiceData;
  constructor() { }
  getInvoices(): Invoice {
    const total = this.calculateTotal();
    return { ...this.invoices[0], total };
  }

  removeItem(id: number): Invoice {
    console.log('InvoiceService: Remove item with id: ', id);
    this.invoices[0].items = this.invoices[0].items.filter(item => item.id !== id);
    const total = this.calculateTotal();
    return { ...this.invoices[0], total };
  }

  calculateTotal(): number {
    return this.invoices[0].items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  saveItem(item: Item): Invoice {
    this.invoices[0].items.push(item);
    const total = this.calculateTotal();
    return { ...this.invoices[0], total };
  }
}
