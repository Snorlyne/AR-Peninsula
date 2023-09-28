import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArZonePage } from './ar-zone.page';

describe('ArZonePage', () => {
  let component: ArZonePage;
  let fixture: ComponentFixture<ArZonePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArZonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
