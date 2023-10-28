import { TestBed } from '@angular/core/testing';

import { CountryMajorLeagueDataResolver } from './country-major-league-data.resolver';

describe('CountryMajorLeagueDataResolver', () => {
  let resolver: CountryMajorLeagueDataResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CountryMajorLeagueDataResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
