import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { mergeMap, Observable, of } from 'rxjs';
import { MajorLeagueData } from '../../models/major-league-data';
import { CacheService } from '../cache/cache.service';
import { Standing } from '../football-api/dtos/standing';
import { FootballApiService } from '../football-api/football-api.service';

@Injectable({
  providedIn: 'root',
})
export class CountryMajorLeagueDataResolver
  implements Resolve<Observable<MajorLeagueData>>
{
  constructor(
    private cacheService: CacheService,
    private footballApiService: FootballApiService
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<MajorLeagueData> {
    let countryParam = route.params['country'];
    const cacheMajorLeagueInfo = this.cacheService.get(countryParam);
    if (cacheMajorLeagueInfo) {
      return of(cacheMajorLeagueInfo);
    }
    let majorLeagueData = {
      idLeague: 0,
      leagueName: '',
      standings: [] as Standing[],
    };
    const leagueName = getMajorLeague(countryParam);
    return this.footballApiService.getLeagueId(leagueName, countryParam).pipe(
      mergeMap((idLeague) => {
        majorLeagueData.leagueName = leagueName;
        majorLeagueData.idLeague = idLeague;
        return this.footballApiService
          .getStandings(idLeague, new Date().getFullYear())
          .pipe(
            mergeMap((standings) => {
              majorLeagueData.standings = standings;
              this.cacheService.set(countryParam, majorLeagueData);
              return of(this.cacheService.get(countryParam)!);
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
