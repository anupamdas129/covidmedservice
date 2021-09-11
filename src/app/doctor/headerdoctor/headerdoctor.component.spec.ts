import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderdoctorComponent } from './headerdoctor.component';

describe('HeaderdoctorComponent', () => {
  let component: HeaderdoctorComponent;
  let fixture: ComponentFixture<HeaderdoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderdoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
