import { TestBed } from '@angular/core/testing';

import { MsslibraryService } from './msslibrary.service';

describe('MsslibraryService', () => {
  let service: MsslibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsslibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
