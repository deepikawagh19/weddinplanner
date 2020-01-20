import { TestBed, inject } from '@angular/core/testing';

import { FunctionlityService } from './functionlity.service';

describe('FunctionlityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FunctionlityService]
    });
  });

  it('should be created', inject([FunctionlityService], (service: FunctionlityService) => {
    expect(service).toBeTruthy();
  }));
});
