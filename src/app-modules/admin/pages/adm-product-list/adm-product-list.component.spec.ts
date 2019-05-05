import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmProductListComponent } from './adm-product-list.component';

describe('AdmProductListComponent', () => {
  let component: AdmProductListComponent;
  let fixture: ComponentFixture<AdmProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
