import { Component } from '@angular/core';

@Component({
    selector: 'app-loop',
    templateUrl: './loop.component.html'

})
export class LoopComponent {
    listItems = [];
    count = 3;
    constructor() {
        this.fillData();
    }

    removeIem(item, indx) {
        if (confirm("Are you sure want to remove - " + item)) {
            this.listItems.splice(indx, 1);
        }
    }

    addItem(todoInput) {
        let value = todoInput.value;
        if (value && value.trim()) {
            this.listItems.push(value.trim());
            todoInput.value = '';
        }

    }

    fillData() {
        // this.listItems = [
        //     'List item 1',
        //     'List item 2',
        //     'List item 3'
        // ];

        for (let item of this.listItems) {
            console.log(item);
        }
    }

}
