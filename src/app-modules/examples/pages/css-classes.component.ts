import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-css-classes',
    templateUrl: './css-classes.component.html',
    // styleUrls: ['./css-classes.component.scss']
})
export class CssClassesComponent {
    msgThemeClass = 'is-link';

    msgThemeClassArray = ['is-success', 'has-text-centered'];

    msgThemeConditions = { 'is-danger': false,
     'has-text-centered': true,
      'is-inline-block': true };

      valid = false;


      toggleProp(key:string){
          this.msgThemeConditions[key] = !this.msgThemeConditions[key];
      }

      toggleState() {
          this.valid = !this.valid;
      }
     
}
