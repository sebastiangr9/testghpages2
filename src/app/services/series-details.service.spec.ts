import { TestBed, inject } from '@angular/core/testing';

import { SeriesDetailsService } from './series-details.service';

describe('SeriesDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeriesDetailsService]
    });
  });

  it('should be created', inject([SeriesDetailsService], (service: SeriesDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
