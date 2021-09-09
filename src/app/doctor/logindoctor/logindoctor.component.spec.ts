import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogindoctorComponent } from './logindoctor.component';

describe('LogindoctorComponent', () => {
  let component: LogindoctorComponent;
  let fixture: ComponentFixture<LogindoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogindoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogindoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
