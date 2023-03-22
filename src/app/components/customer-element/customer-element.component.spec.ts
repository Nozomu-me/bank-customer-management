import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerElementComponent } from './customer-element.component';

describe('CustomerElementComponent', () => {
  let component: CustomerElementComponent;
  let fixture: ComponentFixture<CustomerElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
