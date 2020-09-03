import { Component, OnInit } from '@angular/core';
import { Chart} from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  product = {
    label:'',
    quantity:0
  };

  products= [
    {
    label:'Samsung',
    quantity : 120
  },
  {
    label : 'Huawei',
    quantity : 100
  }

]

  constructor() { }

  ngOnInit(): void {


  }
  
  addProduct(){
    this.products = [this.product, ...this.products];

    this.product = {
      label:'',
      quantity: 0
    };
    console.log(this.products);
  }

}
