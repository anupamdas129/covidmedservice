import { TestBed } from '@angular/core/testing';

import { OxyDbserviceService } from './oxy-dbservice.service';

describe('OxyDbserviceService', () => {
  let service: OxyDbserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OxyDbserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
