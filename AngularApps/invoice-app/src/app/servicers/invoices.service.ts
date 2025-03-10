import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { InvoiceData } from '../data/invoice.data';

@Injectable({
  providedIn: 'root'
})
export class invoiceService {
  private invoices: Invoice[] = InvoiceData;
  constructor() { }
  getInvoices(): Invoice {
    return this.invoices[0];
  }
}
