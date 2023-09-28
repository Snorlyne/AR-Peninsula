import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampecheComponent } from './campeche.component';

describe('CampecheComponent', () => {
  let component: CampecheComponent;
  let fixture: ComponentFixture<CampecheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampecheComponent]
    });
    fixture = TestBed.createComponent(CampecheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
