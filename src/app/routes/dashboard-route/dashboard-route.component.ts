import { Customer } from './../../models/costumer.model';
import { CustomerService } from './../../customer.service';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard-route',
  templateUrl: './dashboard-route.component.html',
  styleUrls: ['./dashboard-route.component.css'],
})
export class DashboardRouteComponent implements OnInit {
  constructor(private customerService: CustomerService) {}

  sub = new Subject();
  customers: Customer[] | undefined;
  totalCustomersNumber: number = 0;
  totalDeposit: number = 0;
  chart: {
    checking: number;
    savings: number;
    moneyMarket: number;
    certificate: number;
  } = { checking: 0, savings: 0, moneyMarket: 0, certificate: 0 };

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((customers) => {
      this.customers = [...customers];
      for (let customer of customers) {
        if (customer.deposit) this.totalDeposit += customer.deposit;
        if (customer.accountType == 'Savings') this.chart.savings += 1;
        if (customer.accountType == 'Checking') this.chart.checking += 1;
        if (customer.accountType == 'Money Market Account')
          this.chart.moneyMarket += 1;
        if (customer.accountType == 'Certificate Of Deposit')
          this.chart.certificate += 1;
      }
      this.totalCustomersNumber = customers.length;
      this.sub
        .pipe(debounceTime(1000), distinctUntilChanged())
        .subscribe((search) => {
          this.customerService
            .searchCustomers(search as string)
            .subscribe((customers: Customer[]) => {
              this.customers = [...customers];
            });
        });
    });
  }

  search(event: any): void {
    this.sub.next(event.target.value);
  }
  Delete(customer: Customer) {
    this.customerService.deleteCustomer(customer).subscribe(() => {
      this.customers = this.customers?.filter((el) => el.id !== customer.id);
    });
  }
}
