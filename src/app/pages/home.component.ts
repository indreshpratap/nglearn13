import { Component } from '@angular/core';
import { ApiClient } from '../providers/api.service';
import { CartService } from '../providers/cart.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: [``]
})
export class HomePageComponent {
    products;
    constructor(private api: ApiClient, public cartSvc: CartService) {

    }

    ngOnInit() {
        this.fetchProducts();
    }

    fetchProducts() {
        this.api.get('products').subscribe(res => {
            this.products = res.data;
        });
    }


}

