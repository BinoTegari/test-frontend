import { Component, OnInit } from '@angular/core';
import {OrderDataService} from "../services/order-data.service";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  constructor(private _orderData: OrderDataService) { }

  ngOnInit(): void {
  }


  get orderData(): OrderDataService {
    return this._orderData;
  }
}
