import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OxygenmanageComponent } from './oxygenmanage.component';

describe('OxygenmanageComponent', () => {
  let component: OxygenmanageComponent;
  let fixture: ComponentFixture<OxygenmanageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OxygenmanageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OxygenmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
