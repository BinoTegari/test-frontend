import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-fence-detail',
  templateUrl: './order-fence-detail.component.html',
  styleUrls: ['./order-fence-detail.component.scss']
})
export class OrderFenceDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  defaultBindingsList = [
    { value: 1, label: 'Vilnius' },
    { value: 2, label: 'Kaunas' },
    { value: 3, label: 'Pavilnys', disabled: true }
  ];

selectedCity = null;

}
