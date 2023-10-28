import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { mergeMap, Observable, of } from 'rxjs';
import { CacheService } from '../cache/cache.service';
import { Standing } from '../football-api/dtos/standing';
import { FootballApiService } from '../football-api/football-api.service';

@Injectable({
  providedIn: 'root',
})
export class CountryMajorLeagueDataResolver
  implements Resolve<Observable<any>>
{
  constructor(
    private cacheService: CacheService,
    private footballApiService: FootballApiService
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<
    | {
        idLeague: number;
        leagueName: string;
        standings: Standing[];
      }
    | undefined
  > {
    let country = route.params['country'];
    if (this.cacheService.get(country)) {
      return of(this.cacheService.get(country));
    }
    let majorLeagueData = {
      idLeague: 0,
      leagueName: '',
      standings: [] as Standing[],
    };
    return this.footballApiService
      .getLeagueId(getMajorLeague(country), country)
      .pipe(
        mergeMap((idLeague) => {
          majorLeagueData.idLeague = idLeague;
          return this.footballApiService
            .getStandings(idLeague, new Date().getFullYear())
            .pipe(
              mergeMap((standings) => {
                majorLeagueData.standings = standings;
                this.cacheService.set(country, majorLeagueData);
                return of(this.cacheService.get(country));
              })
            );
        })
      );
  }
}

function getMajorLeague(country: string): string {
  switch (country) {
    case 'england':
      return 'Premier League';
    case 'france':
      return 'Ligue 1';
    case 'italy':
      return 'Serie A';
    case 'germany':
      return 'Bundesliga';
    case 'spain':
      return 'La Liga';
    default:
      return 'Premier League';
  }
}
