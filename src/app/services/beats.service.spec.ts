import { TestBed } from '@angular/core/testing';

import { BeatsService } from './beats.service';

describe('BeatsService', () => {
  let service: BeatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
