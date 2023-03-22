import { CustomerService } from './../../customer.service';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-route',
  templateUrl: './create-route.component.html',
  styleUrls: ['./create-route.component.css'],
})
export class CreateRouteComponent {
  control: FormControl | undefined;
  form: FormGroup;
  faBars = faBars;

  constructor(
    private formBuilder: FormBuilder,
    private customerSevice: CustomerService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      accountType: ['', [Validators.required]],
      accountNumber: [0, [Validators.required]],
      deposit: [0],
    });
  }
  onSubmit() {
    this.customerSevice.addCustomer(this.form.value).subscribe((customer) => {
      this.router.navigate([`details/${customer.id}`]);
    });
  }
  getControl(controlName: string) {
    return this.form.get(controlName);
  }
}
