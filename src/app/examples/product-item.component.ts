import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-product-item',
    templateUrl: './product-Item.component.html'
})
export class ProductItemComponent {

    @Input() item:any;
    @Input() showRemoveBtn  = false;
    @Input() showAddToCart = true;

    @Output() onAddToCart  = new EventEmitter();
    @Output() onRemove  = new EventEmitter();

    handleRemove(){
        this.onRemove.emit(this.item);
    }

    handleAddToCart() {

        this.onAddToCart.emit(this.item);
        console.log("chlild emitting add to cart action");
    }

}
