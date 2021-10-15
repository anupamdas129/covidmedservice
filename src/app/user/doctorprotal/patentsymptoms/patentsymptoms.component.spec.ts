import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentsymptomsComponent } from './patentsymptoms.component';

describe('PatentsymptomsComponent', () => {
  let component: PatentsymptomsComponent;
  let fixture: ComponentFixture<PatentsymptomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatentsymptomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatentsymptomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
