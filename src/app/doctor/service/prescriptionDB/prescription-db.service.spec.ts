import { TestBed } from '@angular/core/testing';

import { PrescriptionDbService } from './prescription-db.service';

describe('PrescriptionDbService', () => {
  let service: PrescriptionDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrescriptionDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
