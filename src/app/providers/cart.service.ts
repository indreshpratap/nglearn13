import { Injectable } from '@angular/core';
import { ApiClient } from './api.service';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({providedIn:'root'})
export class CartService {
    private cart;
    public onAddToCart:BehaviorSubject<number>;
    constructor(private api: ApiClient) {
       this.fetchCart();
       this.onAddToCart = new BehaviorSubject(this.totalItems());
    }

    addToCart(item) {
        this.cart.push(item);
        this.saveCart();
        this.onAddToCart.next(this.totalItems());
    }

    fetchCart() {
        let cartItems = localStorage.getItem('cart');
        if (cartItems) {
            this.cart = JSON.parse(cartItems);
        } else {
            this.cart = [];
        }
    }

    totalItems(){
        return this.cart.length;
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }
}