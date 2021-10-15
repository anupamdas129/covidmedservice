import { TestBed } from '@angular/core/testing';

import { OxyquentService } from './oxyquent.service';

describe('OxyquentService', () => {
  let service: OxyquentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OxyquentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
