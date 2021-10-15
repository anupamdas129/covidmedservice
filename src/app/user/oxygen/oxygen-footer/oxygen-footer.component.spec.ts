import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OxygenFooterComponent } from './oxygen-footer.component';

describe('OxygenFooterComponent', () => {
  let component: OxygenFooterComponent;
  let fixture: ComponentFixture<OxygenFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OxygenFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OxygenFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
