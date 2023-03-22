import { Customer } from './../../models/costumer.model';
import { CustomerService } from './../../customer.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-customer-details-route',
  templateUrl: './customer-details-route.component.html',
  styleUrls: ['./customer-details-route.component.css'],
})
export class CustomerDetailsRouteComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) {}

  id: string | undefined;
  customer: Customer | undefined;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.customerService
      .getCustomerById(this.id as string)
      .subscribe((customer) => {
        if (!customer) this.router.navigate(['/not-found']);
        else this.customer = customer;
      });
  }
  update(changeValue: { key: string; value: string }) {
    this.customerService
      .updateCustomer(
        { ...this.customer, [changeValue.key]: changeValue.value },
        this.id as string
      )
      .subscribe((customer) => {
        this.customer = { ...customer };
      });
  }
}
