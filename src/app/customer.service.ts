import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer, CustomerForm } from './models/costumer.model';

const API_URL = 'http://localhost:3000/customers/';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL);
  }
  serachCustomers(search: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${API_URL}/?q=${search}`);
  }
  getCustomerById(id: string): Observable<Customer> {
    return this.http.get<Customer>(`${API_URL}/${id}`);
  }
  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(API_URL, customer);
  }
  deleteCustomer(customer: Customer): Observable<any> {
    return this.http.delete(`${API_URL}/${customer.id}`);
  }
  updateCustomer(customer: CustomerForm, id: string): Observable<Customer> {
    return this.http.put<Customer>(`${API_URL}/${id}`, customer);
  }
}
