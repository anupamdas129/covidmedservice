import { TestBed } from '@angular/core/testing';

import { DoctorLinkService } from './doctor-link.service';

describe('DoctorLinkService', () => {
  let service: DoctorLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
