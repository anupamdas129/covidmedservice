import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionLinkComponent } from './prescription-link.component';

describe('PrescriptionLinkComponent', () => {
  let component: PrescriptionLinkComponent;
  let fixture: ComponentFixture<PrescriptionLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
