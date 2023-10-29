import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { FixtureResponseDto } from '../football-api/dtos/fixture-response-dto';
import { FootballApiService } from '../football-api/football-api.service';

@Injectable({
  providedIn: 'root',
})
export class LatestGameResultsResolver
  implements Resolve<FixtureResponseDto[]>
{
  private readonly NB_LAST_GAMES = 10;
  constructor(private footballApiService: FootballApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<FixtureResponseDto[]> {
    const teamId = route.params['team'];
    return this.footballApiService.getLatestGameResults(
      teamId,
      new Date().getFullYear(),
      this.NB_LAST_GAMES
    );
  }
}
