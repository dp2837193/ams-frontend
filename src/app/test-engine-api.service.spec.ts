import { TestBed } from '@angular/core/testing';

import { TestEngineApiService } from './test-engine-api.service';

describe('TestEngineApiService', () => {
  let service: TestEngineApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestEngineApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
