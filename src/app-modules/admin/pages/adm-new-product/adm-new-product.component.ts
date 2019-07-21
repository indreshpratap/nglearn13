import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ApiClient } from 'src/app/providers/api.service';

@Component({
  selector: 'app-adm-new-product',
  templateUrl: './adm-new-product.component.html',
  styleUrls: ['./adm-new-product.component.scss']
})
export class AdmNewProductComponent implements OnInit, OnDestroy {

  form: FormGroup;
  submitted = false;
  details: FormArray;
  category;

  constructor(
    private activatedRoutes: ActivatedRoute,
    private fb: FormBuilder, private api: ApiClient) {

    console.log("Constructor", this.activatedRoutes.snapshot.params,
      this.activatedRoutes.snapshot.queryParams);

    this.activatedRoutes.params.subscribe((data) => {
      console.log("Subscribed data: ", data);
    });

    this.activatedRoutes.queryParams.subscribe((data) => {
      console.log("Subscribed data for query params: ", data);
    });

    this.prepareForm();

  }

  ngOnInit() {
    this.setCategory();
    //  this.addLabelAndDescription();
    let formData = localStorage.getItem('userForm');
    if (formData) {
      let data = JSON.parse(formData);
      if (data.details && data.details.length) {
        for (let i of data.details) {
          this.addLabelAndDescription();
        }
      } else {
        this.addLabelAndDescription();
      }
      this.form.patchValue(data);
    } else {
      this.addLabelAndDescription();
    }
  }
  save() {
   if(this.form.valid){
this.api.post('admin/product',this.form.value).subscribe(res=>{
  if(res.status){
    alert('Product saved');
    this.submitted = true;
    this.form.reset();
    this.clearStore();
    this.prepareForm();
    this.addLabelAndDescription();
    
  }
},(err)=>{
  alert('Failed to save product!');
})
   }
  }

 


  prepareForm() {
    // this.form = new FormGroup({
    //   name: new FormControl('ABC', [Validators.required]),
    //   description: new FormControl(),
    //   category: new FormControl('Cat 1', [Validators.required]),
    //   published: new FormControl(true)
    // });
    // let addressGroup = this.fb.group({
    //   line1: ["", [Validators.required, MyValidators.addressAlphaNum]],
    //   line2: [null, [Validators.required, MyValidators.addressAlphaNum]]
    // });

    this.details = this.fb.array([]);

    this.form = this.fb.group({
      name: ['', [Validators.required]],
      description: null,
      category: ['', [Validators.required]],
      price: [0, [Validators.required]],
      published: true,
      //   address: addressGroup,
      details: this.details
    });
  }

  addLabelAndDescription() {
    this.details.push(this.fb.group({
      label: [, [Validators.required]],
      description: [, [Validators.required]]
    }));
  }

  deleteExp(index) {
    if (confirm('Are you  sure want to delete?')) {
      this.details.removeAt(index);
    }
  }
  ngOnDestroy() {
    if (!this.submitted) {
      localStorage.setItem('userForm', JSON.stringify(this.form.value));
    }

  }

  clearStore() {
    localStorage.removeItem('userForm');
  }


  setCategory() {
    this.api.get('admin/cat-select').subscribe(res => {

      this.category = res.data.map(item => {
        return { value: item._id, label: item.label };
      });
    });
  }



}
