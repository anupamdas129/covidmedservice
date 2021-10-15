import { TestBed } from '@angular/core/testing';

import { OxybookserviceService } from './oxybookservice.service';

describe('OxybookserviceService', () => {
  let service: OxybookserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OxybookserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
