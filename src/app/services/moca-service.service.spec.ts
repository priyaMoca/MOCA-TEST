import { TestBed } from '@angular/core/testing';

import { MocaServiceService } from './moca-service.service';

describe('MocaServiceService', () => {
  let service: MocaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MocaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
