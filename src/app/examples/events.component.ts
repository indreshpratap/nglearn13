import { Component } from '@angular/core';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html'

})
export class EventsComponent {

    msg: string;

    sayHello() {
        alert('Say hello');
        this.msg = "Hey how are you?";
    }

    handleDblClick(ev, defaultMsg) {
        console.log(ev);
        this.msg = this.msg ? this.msg + 'its double click' : defaultMsg;
    }
}
