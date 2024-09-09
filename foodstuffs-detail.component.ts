import { Component } from '@angular/core';
import { CartService } from './foodstuffs-detail.service';
import { foodstuff } from '../foodstuffs.model';

@Component({
  selector: 'app-foodstuffs-detail',
  templateUrl: './foodstuffs-detail.component.html',
  styleUrl: './foodstuffs-detail.component.css'
})
export class FoodstuffsDetailComponent {
  cartItems: foodstuff[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });
  }
  removeFromCart(item: foodstuff) {
    this.cartService.removeFromCart(item);
  }

  getStars(rating?: number): number[] {
    return rating ? Array(Math.floor(rating)) : [];
  }

  getEmptyStars(rating?: number): number[] {
    return rating ? Array(5 - Math.ceil(rating)) : [];
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}
