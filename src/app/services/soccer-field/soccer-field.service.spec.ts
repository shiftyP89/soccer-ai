import { TestBed, inject } from '@angular/core/testing';

import { SoccerFieldService } from './soccer-field.service';

describe('SoccerFieldService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SoccerFieldService]
    });
  });

  it('should be created', inject([SoccerFieldService], (service: SoccerFieldService) => {
    expect(service).toBeTruthy();
  }));
});
