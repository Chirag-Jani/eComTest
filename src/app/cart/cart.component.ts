import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartProduct = [
    {
      name: 'Default Item',
      desc: 'none',
      price: '-',
    },
  ];

  cartTotal = this.cartProduct.length;

  constructor() {}

  ngOnInit(): void {}

  updateCartProducts(name: string, desc: string, price: string) {
    debugger;
    const cartItem = { name, desc, price };
    this.cartProduct.push(cartItem);
    console.log(
      `${cartItem.name} + ${cartItem.desc} + ${cartItem.price} added to cart`
    );
  }
}
