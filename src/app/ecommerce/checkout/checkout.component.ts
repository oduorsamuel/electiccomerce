import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  products = [];
  credentials: any;
  totalprice: number;

  constructor() { }

  ngOnInit(): void {
    this.credentials = JSON.parse(localStorage.getItem('credentials'));
    this.products = JSON.parse(localStorage.getItem('products'));
    this.totalprice = this.products.map((o) => Number(o.price)).reduce((a, c) => a + c);
    console.log(this.products);
  }

}
