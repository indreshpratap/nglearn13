import { Component } from '@angular/core';
import { CartService } from '../providers/cart.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-about',
    template: `this is about page`,
    styles: [``]
})
export class AboutPageComponent {
onCartSub$:Subscription;

    constructor(private cart: CartService) {
       this.onCartSub$ =  this.cart.onAddToCart.subscribe(res => {
            console.log("About", res);
        })
    }

    ngOnDestroy(): void {
       if(this.onCartSub$){
           this.onCartSub$.unsubscribe();
           this.onCartSub$ = null;
       }
        
    }
}
