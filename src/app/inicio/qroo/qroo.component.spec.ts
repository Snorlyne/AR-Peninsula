import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrooComponent } from './qroo.component';

describe('QrooComponent', () => {
  let component: QrooComponent;
  let fixture: ComponentFixture<QrooComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QrooComponent]
    });
    fixture = TestBed.createComponent(QrooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
