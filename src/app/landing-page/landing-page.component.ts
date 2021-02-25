import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  products = [
    {name: 'Electics Product 1', image: '5615854990.jpg', price: '33', discount: '34'},
    {name: 'Electics Product 2', image: '5892565850.jpg', price: '35', discount: '56'},
    {name: 'Electics Product 3', image: '5991713086.jpg', price: '36', discount: '57'},
    {name: 'Electics Product 4', image: '6049281045.jpg', price: '38', discount: '39'},
    {name: 'Electics Product 5', image: '6298374167.jpg', price: '38', discount: '70'},
    {name: 'Electics Product 6', image: '6381079466.jpg', price: '37', discount: '60'},
    {name: 'Electics Product 7', image: '6482952761.jpg', price: '31', discount: '61'},
    {name: 'Electics Product 8', image: '6501906268.jpg', price: '33', discount: '64'},
    {name: 'Electics Product 9', image: '5615854990.jpg', price: '33', discount: '34'},
    {name: 'Electics Product 10', image: '5892565850.jpg', price: '35', discount: '56'},
    {name: 'Electics Product 11', image: '5991713086.jpg', price: '36', discount: '57'},
    {name: 'Electics Product 12', image: '6049281045.jpg', price: '38', discount: '39'},
  ];

  ngOnInit(): void {
    console.log('we are here');
  }

}
