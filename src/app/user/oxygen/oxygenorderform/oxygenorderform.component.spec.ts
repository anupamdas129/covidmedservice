import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OxygenorderformComponent } from './oxygenorderform.component';

describe('OxygenorderformComponent', () => {
  let component: OxygenorderformComponent;
  let fixture: ComponentFixture<OxygenorderformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OxygenorderformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OxygenorderformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
