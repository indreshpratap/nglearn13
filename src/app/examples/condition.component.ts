import { Component } from '@angular/core';
import * as moment from 'moment';
@Component({
    selector: 'app-condition',
    templateUrl: './condition.component.html'

})
export class ConditionComponent {

    expiryDate = moment([2019, 3, 14]);
    current = moment();
    showNotification = false;
    step = 0;
    constructor() {
        let diff = (this.expiryDate.diff(this.current, 'days'));
        if (diff <= 7) {
            this.showNotification = true;
        }
    }

    toggle() {
        this.showNotification = !this.showNotification;
    }

    inc(){
        ++this.step;
    }
    dec(){
        --this.step;
    }
}

