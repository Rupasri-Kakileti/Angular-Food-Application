import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { foodstuff } from '../foodstuffs.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: foodstuff[] = [];
  private cartItemsSubject = new BehaviorSubject<foodstuff[]>(this.cartItems);

  getCartItems() {
    return this.cartItemsSubject.asObservable();
  }

  addToCart(item: foodstuff) {
    this.cartItems.push(item);
    this.cartItemsSubject.next(this.cartItems);
  }
  removeFromCart(item: foodstuff) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
    this.cartItemsSubject.next(this.cartItems);
  }
}
