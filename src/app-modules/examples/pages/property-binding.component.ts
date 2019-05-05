import { Component } from '@angular/core';

@Component({
    selector:"app-property-binding",
    templateUrl:"./property-binding.component.html"
})
export class PropertyBindingComponent {

    myId = "msg";
    myValue = "my value";
    msgClass = "";

    lock = true;

    constructor(){

        setTimeout(() => {
            this.msgClass = 'error';
        }, 1000);

        setTimeout(() => {
            this.msgClass = 'success';
            this.lock = false;
        }, 3000);
        setTimeout(() => {
            this.lock = false;
        }, 5000);
    }
}