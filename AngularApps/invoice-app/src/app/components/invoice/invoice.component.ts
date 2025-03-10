import { Component, OnInit } from '@angular/core';
import { Invoice } from '../../models/invoice';
import { InvoiceService } from '../../servicers/invoices.service';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ClientViewComponent } from '../client-view/client-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { TotalComponent } from '../total/total.component';
import { FormItemComponent } from '../form-item/form-item.component';
import { Item } from '../../models/item';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [FormItemComponent, TotalComponent, InvoiceViewComponent, ClientViewComponent, CompanyViewComponent, ListItemsComponent],
  templateUrl: './invoice.component.html'
})
export class InvoiceComponent implements OnInit {
  invoice!: Invoice;

  constructor(private service: InvoiceService ) { }

  ngOnInit(): void {
    this.invoice = this.service.getInvoices();
  }

  removeItem(id: number) {
    console.log('InvoiceComponent: Remove item with id: ', id);
    this.invoice = this.service.removeItem(id);
  }

  addItem(item: Item) {
    console.log('InvoiceComponent: Add item: ', item);
    this.invoice = this.service.saveItem(item);
  }
}
