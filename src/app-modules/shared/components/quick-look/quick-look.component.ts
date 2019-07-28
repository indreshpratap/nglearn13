import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ApiClient } from 'src/app/providers/api.service';

@Component({
  selector: 'app-quick-look',
  templateUrl: './quick-look.component.html',
  styleUrls: ['./quick-look.component.scss']
})
export class QuickLookComponent implements OnInit {

  @Input() productRef;
  @Input() test;
  detail;
  constructor(private api: ApiClient) {
    console.log('Quick look constructor', this.productRef);
  }

  ngOnInit() {
    console.log('Quick look ngOnInit', this.productRef);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
    if (changes.productRef) {
      this.getProductDetails(changes.productRef.currentValue.id);

    }
    if (changes.test) {

    }

  }


  getProductDetails(productId) {
    this.api.get(`product/${productId}`).subscribe(res => {
      this.detail = res.data;
    })
  }

}
