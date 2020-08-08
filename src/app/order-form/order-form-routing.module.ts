import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { OrderFormComponent } from './components/order-form.component';
import { OrderFenceDetailComponent } from './components/order-fence-detail/order-fence-detail.component';
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { OrderCustomerDetailComponent } from './components/order-customer-detail/order-customer-detail.component';




const routes: Routes = [
{
    path: '',
    component: OrderFormComponent,
    children: [
        {
            path: 'step1',
            component: OrderFenceDetailComponent
        },
        {
            path: 'step2',
            component: OrderCustomerDetailComponent
        },
        {
            path: 'final-step',
            component: OrderDetailComponent
        }
    ]
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrderFormRouting {}