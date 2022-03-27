import { TestBed } from '@angular/core/testing';

import { AridService } from './arid.service';

describe('AridService', () => {
  let service: AridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
