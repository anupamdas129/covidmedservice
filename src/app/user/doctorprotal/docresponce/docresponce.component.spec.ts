import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocresponceComponent } from './docresponce.component';

describe('DocresponceComponent', () => {
  let component: DocresponceComponent;
  let fixture: ComponentFixture<DocresponceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocresponceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocresponceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
