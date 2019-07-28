import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiClient } from 'src/app/providers/api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  suggested;
  detail;
  constructor(private activatedRoute: ActivatedRoute,
    private api: ApiClient) { }

  ngOnInit() {
    //debugger;
    console.log('details ngOnInit chaned');
    // url params /:id/:name
    console.log(this.activatedRoute.snapshot.params);
    //?name=test one&ref=2232
    console.log(this.activatedRoute.snapshot.queryParams);

    this.activatedRoute.params.subscribe(params => {
      console.log('Subscribed to params', params);
      this.getProductDetails(params.id);
    })

    this.fetchSuggestedProducts();
  }


  getProductDetails(productId) {
    this.api.get(`product/${productId}`).subscribe(res => {
      this.detail = res.data;
    })
  }

  fetchSuggestedProducts() {
    this.api.get('suggested-products').subscribe(res => {
      this.suggested = res.data;
    });
  }

}
