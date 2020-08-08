import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFenceDetailComponent } from './order-fence-detail.component';

describe('OrderFenceDetailComponent', () => {
  let component: OrderFenceDetailComponent;
  let fixture: ComponentFixture<OrderFenceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderFenceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFenceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
