import { TestBed } from '@angular/core/testing';

import { PatentDetailsService } from './patentdetails-db.service';

describe('PatentdetailsDbService', () => {
  let service: PatentDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatentDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
