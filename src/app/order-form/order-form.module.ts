import { OrderFenceDetailComponent } from './components/order-fence-detail/order-fence-detail.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { OrderCustomerDetailComponent } from './components/order-customer-detail/order-customer-detail.component';
import { OrderFormRouting } from './order-form-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderFormComponent } from './components/order-form.component';
import {NgSelectModule} from "@ng-select/ng-select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    OrderFormComponent,
    OrderCustomerDetailComponent,
    OrderDetailComponent,
    OrderFenceDetailComponent
  ],
  imports: [
    OrderFormRouting,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    OrderFormComponent,
    OrderCustomerDetailComponent,
    OrderDetailComponent,
    OrderFenceDetailComponent
  ]
})
export class OrderFormModule { }
