import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOxygenOrderComponent } from './check-oxygen-order.component';

describe('CheckOxygenOrderComponent', () => {
  let component: CheckOxygenOrderComponent;
  let fixture: ComponentFixture<CheckOxygenOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckOxygenOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOxygenOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
