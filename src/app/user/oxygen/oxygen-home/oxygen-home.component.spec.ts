import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OxygenHomeComponent } from './oxygen-home.component';

describe('OxygenHomeComponent', () => {
  let component: OxygenHomeComponent;
  let fixture: ComponentFixture<OxygenHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OxygenHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OxygenHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
