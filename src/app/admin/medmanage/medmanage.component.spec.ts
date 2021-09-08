import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedmanageComponent } from './medmanage.component';

describe('MedmanageComponent', () => {
  let component: MedmanageComponent;
  let fixture: ComponentFixture<MedmanageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedmanageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
