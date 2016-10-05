/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WeightingService } from './weighting.service';

describe('Service: Weighting', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeightingService]
    });
  });

  it('should ...', inject([WeightingService], (service: WeightingService) => {
    expect(service).toBeTruthy();
  }));
});
