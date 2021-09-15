import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationuserComponent } from './registrationuser.component';

describe('RegistrationuserComponent', () => {
  let component: RegistrationuserComponent;
  let fixture: ComponentFixture<RegistrationuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
