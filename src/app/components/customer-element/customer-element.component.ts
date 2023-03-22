import { Customer } from './../../models/costumer.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer-element',
  templateUrl: './customer-element.component.html',
  styleUrls: ['./customer-element.component.css'],
})
export class CustomerElementComponent {
  constructor() {}
  @Input() customer: Customer | undefined;
  @Output() deleteCustomer = new EventEmitter<Customer>();

  faTrash = faTrash;
  faCircleInfo = faCircleInfo;

  delete(customer: Customer | undefined) {
    this.deleteCustomer.emit(customer);
  }
}
