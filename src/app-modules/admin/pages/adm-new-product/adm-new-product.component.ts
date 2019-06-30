import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { MyValidators } from 'src/app-modules/shared/utils/custom.validator';

@Component({
  selector: 'app-adm-new-product',
  templateUrl: './adm-new-product.component.html',
  styleUrls: ['./adm-new-product.component.scss']
})
export class AdmNewProductComponent implements OnInit, OnDestroy {

  form: FormGroup;
  submitted = false;
  experience: FormArray;
  category;
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

  ngOnInit() {
    this.setCategory();
    //  this.addExperience();
    let formData = localStorage.getItem('userForm');
    if (formData) {
      let data = JSON.parse(formData);
      if (data.experience && data.experience.length) {
        for (let i of data.experience) {
          this.addExperience();
        }
      } else {
        this.addExperience();
      }
      this.form.patchValue(data);
    } else {
      this.addExperience();
    }
  }
  save() {
    console.log(this.form.value);
    this.submitted = true;
    this.form.reset();
    this.clearStore();
  }


  prepareForm() {
    // this.form = new FormGroup({
    //   name: new FormControl('ABC', [Validators.required]),
    //   description: new FormControl(),
    //   category: new FormControl('Cat 1', [Validators.required]),
    //   published: new FormControl(true)
    // });
    let addressGroup = this.fb.group({
      line1: ["", [Validators.required, MyValidators.addressAlphaNum]],
      line2: [null, [Validators.required, MyValidators.addressAlphaNum]]
    });

    this.experience = this.fb.array([]);

    this.form = this.fb.group({
      name: ['', [Validators.required]],
      description: null,
      category: ['', [Validators.required]],
      published: true,
      address: addressGroup,
      experience: this.experience
    });
  }

  addExperience() {
    this.experience.push(this.fb.group({
      companyName: [, [Validators.required]],
      jobTitle: [],
      from: [],
      to: []
    }));
  }

  deleteExp(index) {
    if(confirm('Are you  sure want to delete?')){
    this.experience.removeAt(index);
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


  setCategory(){
    this.category = [
      {label:"Cat 1", value:"Cat 1"},
      {label:"Cat 2", value:"Cat 2"},
      {label:"Cat 3", value:"Cat 3"},
      {label:"Cat 4", value:"Cat 4"},
      {label:"Cat 5", value:"Cat 5"},
      {label:"Cat 6", value:"Cat 6"}
    ];
  }



}
