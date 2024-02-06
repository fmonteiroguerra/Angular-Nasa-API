import { TestBed } from '@angular/core/testing';

import { AsteroidServiceService } from './asteroid-service.service';

describe('AsteroidServiceService', () => {
  let service: AsteroidServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsteroidServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
