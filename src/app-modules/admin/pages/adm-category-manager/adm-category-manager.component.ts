import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adm-category-manager',
  templateUrl: './adm-category-manager.component.html',
  styleUrls: ['./adm-category-manager.component.scss']
})
export class AdmCategoryManagerComponent implements OnInit {

  category:string='First category';
  group:string = 'top';
  submitted = false;
  constructor() { }

  ngOnInit() {
  }


  save(form:NgForm){
    this.submitted= true;
    console.log(form);
    console.log('Saving...', this.category);
    // this.category = null;
  }

}
