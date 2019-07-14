import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiClient } from 'src/app/providers/api.service';

@Component({
  selector: 'app-adm-category-manager',
  templateUrl: './adm-category-manager.component.html',
  styleUrls: ['./adm-category-manager.component.scss']
})
export class AdmCategoryManagerComponent implements OnInit {

  parentCategory: string;
  categorySlug: string;
  category: string = 'First category';
  group: string = 'top';
  submitted = false;

  catSelect: Array<any>;
  categories: Array<any>;

  constructor(private api: ApiClient) { }

  ngOnInit() {
    this.getCategories();
  }


  getCategories() {
    this.api.get('admin/cat-select').subscribe(res => {
      this.catSelect = res.data;
    });
    this.api.get('admin/categories').subscribe(res => {
      this.categories = res.data;
    });


  }


  save(form: NgForm) {
    this.submitted = true;
    console.log(form);
    console.log('Saving...', this.category);


    this.api.post('admin/category', form.value).subscribe(res => {
      if (res.status) {
        alert('Category saved');
        form.reset();
        this.getCategories();
      }
    }, (err) => {
      alert('Failed to save Category');
    })
    // this.category = null;
  }

  trimmer(value: string,length=100,suffix='...'): any {
    console.log("Trimmer running for =>", value);
    
    if(value && value.length > length){
        return value.substr(0,length)+suffix;
    }else {
        return value;
    }
}

}
