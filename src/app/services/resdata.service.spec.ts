import { TestBed } from '@angular/core/testing';

import { ResdataService } from './resdata.service';

describe('ResdataService', () => {
  let service: ResdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
