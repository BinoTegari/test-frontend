import { OrderFenceDetailComponent } from './order-form/components/order-fence-detail/order-fence-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderFormComponent } from './order-form/components/order-form.component';

const routes: Routes = [
  {
    path: 'order-form',
    loadChildren: () => import('./order-form/order-form.module').then(m => m.OrderFormModule)
  },
  { path: '',   redirectTo: '/order-form/step1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
