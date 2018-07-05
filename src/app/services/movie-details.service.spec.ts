import { TestBed, inject } from '@angular/core/testing';

import { MovieDetailsService } from './movie-details.service';

describe('MovieDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieDetailsService]
    });
  });

  it('should be created', inject([MovieDetailsService], (service: MovieDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
