import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adm-new-product',
  templateUrl: './adm-new-product.component.html',
  styleUrls: ['./adm-new-product.component.scss']
})
export class AdmNewProductComponent {

  constructor(private activatedRoutes: ActivatedRoute) { 
    console.log("Constructor",this.activatedRoutes.snapshot.params,
    this.activatedRoutes.snapshot.queryParams);
   this.activatedRoutes.params.subscribe((data)=>{
    console.log("Subscribed data: ", data);
   });

   this.activatedRoutes.queryParams.subscribe((data)=>{
    console.log("Subscribed data for query params: ", data);
   });

  }

  

}
