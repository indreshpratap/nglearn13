import { Component, OnInit } from '@angular/core';
import { ApiClient } from 'src/app/providers/api.service';

@Component({
  selector: 'app-adm-product-list',
  templateUrl: './adm-product-list.component.html',
  styleUrls: ['./adm-product-list.component.scss']
})
export class AdmProductListComponent implements OnInit {

  // readonly PRODUCTS_API = 'http://localhost:3000/products';

  products;
  constructor(private apiClient: ApiClient) {

  }

  ngOnInit() { 
  
    this.apiClient.get("products").subscribe(res => {
      if(res.status){
        this.products = res.data;
      }
        
    });
  }

}
