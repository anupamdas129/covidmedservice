import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocserviceComponent } from './docservice.component';

describe('DocserviceComponent', () => {
  let component: DocserviceComponent;
  let fixture: ComponentFixture<DocserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
