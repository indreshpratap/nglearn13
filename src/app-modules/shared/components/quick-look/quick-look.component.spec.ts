import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickLookComponent } from './quick-look.component';

describe('QuickLookComponent', () => {
  let component: QuickLookComponent;
  let fixture: ComponentFixture<QuickLookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickLookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickLookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
