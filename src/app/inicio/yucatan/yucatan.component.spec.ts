import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YucatanComponent } from './yucatan.component';

describe('YucatanComponent', () => {
  let component: YucatanComponent;
  let fixture: ComponentFixture<YucatanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YucatanComponent]
    });
    fixture = TestBed.createComponent(YucatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
