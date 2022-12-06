import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  template: `
    
  `,
  styles: [`
    .shopping-cart {
      max-width: 800px;
      margin: 0 auto;
    }
    .cart-items {
      display: flex;
      flex-wrap: wrap;
    }
    .cart-item {
      width: 33.33%;
      padding: 10px;
      box-sizing: border-box;
    }
    .cart-item-image {
      width: 100%;
    }
    .cart-item-name {
      font-size: 18px;
      font-weight: bold;
      margin-top: 10px;
    }
    .cart-item-price {
      font-size: 16px;
      color: #333;
      margin-top: 5px;
    }
    .cart-total {
      margin-top: 20px;
      text-align: right;
    }
  `]})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
