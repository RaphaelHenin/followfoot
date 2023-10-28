import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GenericResponseDto } from './dtos/generic-response-dto';
import { Standing } from './dtos/standing';

@Injectable({
  providedIn: 'root',
})
export class FootballApiService {
  private BASE_PATH = 'https://v3.football.api-sports.io';

  constructor(private httpClient: HttpClient) {}

  getStandings(idLeague: number, season: number): Observable<Standing[]> {
    return this.httpClient
      .get<GenericResponseDto>(
        `${this.BASE_PATH}/standings?league=${idLeague}&season=${season}`
      )
      .pipe(
        map((genericResponse) => {
          let standings = new Array(
            ...genericResponse.response[0].league.standings[0]
          );
          this.orderRank(standings);
          this.addGoaldDifference(standings);
          return standings;
        })
      );
  }

  getLeagueId(leagueName: string, country: string): Observable<number> {
    return this.httpClient
      .get<GenericResponseDto>(
        `${this.BASE_PATH}/leagues?country=${country}&name=${leagueName}`
      )
      .pipe(map((genericResponse) => genericResponse.response[0].league.id));
  }

  /**
   * Function that calculate and add the goal difference to each Standing object of the array
   * @param standings array of standing object
   */
  private addGoaldDifference = (standings: Standing[]) => {
    standings.forEach(
      (standing) =>
        (standing.goalsDiff =
          standing.all.goals.for - standing.all.goals.against)
    );
  };

  /**
   * Function that sort the standing array by rank (to ensure the display)
   * @param standings array of standing object
   */
  private orderRank = (standings: Standing[]) => {
    standings.sort((a, b) => {
      return a.rank === b.rank ? 0 : a.rank < b.rank ? -1 : 1;
    });
  };
}
