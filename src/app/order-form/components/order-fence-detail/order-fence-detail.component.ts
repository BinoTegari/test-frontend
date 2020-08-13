import { Component, OnInit } from '@angular/core';
import { OrderDataService } from '../services/order-data.service';

@Component({
  selector: 'app-order-fence-detail',
  templateUrl: './order-fence-detail.component.html',
  styleUrls: ['./order-fence-detail.component.scss']
})
export class OrderFenceDetailComponent implements OnInit {

  constructor(private _orderData: OrderDataService) { }

  get orderData(): OrderDataService {
    return this._orderData;
  }

  defaultBindingsList = [
    { value: 0, label: 'Выберите материал' },
    { value: 1, label: 'профнастил 400₽ за м² ' },
    { value: 2, label: 'модули 500₽ за м²' },
    { value: 3, label: 'бетон 700₽ за м²' },
    { value: 4, label: 'сетка 200₽ за м²' },
  ];

  selectedSity = null;

  ngOnInit(): void {
    this.selectedSity = this.defaultBindingsList[0];
  }

}
