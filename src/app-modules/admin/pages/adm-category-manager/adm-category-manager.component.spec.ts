import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCategoryManagerComponent } from './adm-category-manager.component';

describe('AdmCategoryManagerComponent', () => {
  let component: AdmCategoryManagerComponent;
  let fixture: ComponentFixture<AdmCategoryManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmCategoryManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmCategoryManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
