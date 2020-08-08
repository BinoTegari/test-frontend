import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderCustomerDetailComponent } from './order-customer-detail/order-customer-detail.component';
import { OrderFenceDetailComponent } from './order-fence-detail/order-fence-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderDetailComponent,
    OrderCustomerDetailComponent,
    OrderFenceDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
