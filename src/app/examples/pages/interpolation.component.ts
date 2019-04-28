import { Component } from '@angular/core';

@Component({
    selector:"app-interpolation",
    templateUrl:"./interpolation.component.html"
})
export class InterpolationComponent {
        message = 'This is my message fsdfsd ';
        colors = ['White','Green','Red'];
        user = {name:"User 1",email:"user@email.com"};
    active = false;

        constructor() {
        console.log(this.colors.toString());
        console.log(this.user.toString());
            setTimeout(() => {
                    this.message = "Changed now";
            }, 2000);
        }
}