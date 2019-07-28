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
    currentProductRef = { id: null };
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

    setCurrentProduct(productId) {
        console.log('Setting the current product', productId);
        // not going to trigger ngOnChanges
        this.currentProductRef.id = productId;
        // will trigger ngOnChanges
        this.currentProductRef = { id: productId };
    }


}

