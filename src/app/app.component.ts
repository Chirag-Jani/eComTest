import { CartComponent } from './cart/cart.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input()
  cartTotal: CartComponent = new CartComponent();
  title = 'eCom';
  cartItems = this.cartTotal.cartTotal;
}
