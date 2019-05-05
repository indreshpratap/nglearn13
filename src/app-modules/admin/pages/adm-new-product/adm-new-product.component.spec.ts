import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmNewProductComponent } from './adm-new-product.component';

describe('AdmNewProductComponent', () => {
  let component: AdmNewProductComponent;
  let fixture: ComponentFixture<AdmNewProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmNewProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmNewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
