import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-adm-new-product',
  templateUrl: './adm-new-product.component.html',
  styleUrls: ['./adm-new-product.component.scss']
})
export class AdmNewProductComponent {

  form: FormGroup;
  constructor(
    private activatedRoutes: ActivatedRoute,
    private fb: FormBuilder) {
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


  save() {
    console.log(this.form.value);
  }


  prepareForm() {
    // this.form = new FormGroup({
    //   name: new FormControl('ABC', [Validators.required]),
    //   description: new FormControl(),
    //   category: new FormControl('Cat 1', [Validators.required]),
    //   published: new FormControl(true)
    // });
let addressGroup = this.fb.group({
  line1:["Addr",[Validators.required]],
  line2:null
}); 

    this.form = this.fb.group({
      name: ['ABC', [Validators.required]],
      description: null,
      category: ['Cat 1', [Validators.required]],
      published: true,
      address: addressGroup
    });
  }



}
