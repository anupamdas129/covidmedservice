import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderOxygenComponent } from './order-oxygen.component';

describe('OrderOxygenComponent', () => {
  let component: OrderOxygenComponent;
  let fixture: ComponentFixture<OrderOxygenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderOxygenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderOxygenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
