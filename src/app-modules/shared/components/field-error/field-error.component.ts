import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.scss']
})
export class FieldErrorComponent implements OnInit {

  @Input() control:FormControl;

  @Input() messages:any;
  
  constructor() { }

  ngOnInit() {
  }

}
