import { TestBed, inject } from '@angular/core/testing';

import { ChartCommonService } from './chart-common.service';

describe('ChartCommonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartCommonService]
    });
  });

  it('should be created', inject([ChartCommonService], (service: ChartCommonService) => {
    expect(service).toBeTruthy();
  }));
});
