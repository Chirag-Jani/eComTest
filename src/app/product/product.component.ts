import { CartComponent } from './../cart/cart.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  // input cart component properties
  // @Input()
  // updateCartProducts: CartComponent = new CartComponent();

  productList = [
    {
      // id: 1,
      name: 'Product one',
      desc: 'Product Description one',
      price: '199.99',
    },
    {
      // id: 2,
      name: 'Product two',
      desc: 'Product Description two',
      price: '299.99',
    },
    {
      // id: 3,
      name: 'Product three',
      desc: 'Product Description three',
      price: '399.99',
    },
  ];

  cartProduct = [
    {
      name: 'Default Item',
      desc: 'none',
      price: '0.0',
    },
  ];

  cartTotal = this.cartProduct.length;

  // totalPrice = this.cartProduct.map((a) => a.price);

  constructor() {}

  ngOnInit(): void {}

  addToCart(name: string, desc: string, price: string) {
    // console.log(`${name} + ${desc} + ${price}`);
    const productValue = { name, desc, price };
    // this.productList.push(productValue);
    // this.updateCartProducts.updateCartProducts(name, desc, price);
    this.cartProduct.push(productValue);
    this.cartTotal = this.cartProduct.length;
    // this.totalPrice = this.cartProduct.map((a) => a.price);
  }
}
