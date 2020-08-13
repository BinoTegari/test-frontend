import { Component, OnInit } from '@angular/core';
import { OrderDataService } from "../services/order-data.service";

@Component({
  selector: 'app-order-customer-detail',
  templateUrl: './order-customer-detail.component.html',
  styleUrls: ['./order-customer-detail.component.scss']
})
export class OrderCustomerDetailComponent implements OnInit {

  constructor(private _orderData: OrderDataService) { }

  ngOnInit(): void {
  }


  get orderData(): OrderDataService {
    return this._orderData;
  }
}
