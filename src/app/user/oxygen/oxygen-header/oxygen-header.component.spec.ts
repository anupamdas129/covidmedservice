import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OxygenHeaderComponent } from './oxygen-header.component';

describe('OxygenHeaderComponent', () => {
  let component: OxygenHeaderComponent;
  let fixture: ComponentFixture<OxygenHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OxygenHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OxygenHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
