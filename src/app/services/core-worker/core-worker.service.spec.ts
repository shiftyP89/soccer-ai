import { TestBed, inject } from '@angular/core/testing';

import { CoreWorkerService } from './core-worker.service';

describe('CoreWorkerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoreWorkerService]
    });
  });

  it('should be created', inject([CoreWorkerService], (service: CoreWorkerService) => {
    expect(service).toBeTruthy();
  }));
});
