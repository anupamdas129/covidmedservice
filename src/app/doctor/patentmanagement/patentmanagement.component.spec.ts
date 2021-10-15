import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentmanagementComponent } from './patentmanagement.component';

describe('PatentmanagementComponent', () => {
  let component: PatentmanagementComponent;
  let fixture: ComponentFixture<PatentmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatentmanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatentmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
