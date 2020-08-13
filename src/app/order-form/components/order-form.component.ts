import { Component } from '@angular/core';
import { OrderDataService } from './services/order-data.service';

@Component({
    selector: 'app-order-form',
    templateUrl: './order-form.component.html',
    styleUrls: ['./order-form.component.scss'],
    providers: [OrderDataService]
})
export class OrderFormComponent { }
