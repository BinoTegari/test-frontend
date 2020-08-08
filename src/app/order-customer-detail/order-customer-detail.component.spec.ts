import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCustomerDetailComponent } from './order-customer-detail.component';

describe('OrderCustomerDetailComponent', () => {
  let component: OrderCustomerDetailComponent;
  let fixture: ComponentFixture<OrderCustomerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCustomerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCustomerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
