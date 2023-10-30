import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FixtureResponseDto } from './dtos/fixture-response-dto';
import { GenericResponseDto } from './dtos/generic-response-dto';
import { Standing } from './dtos/standing';
import { StandingResponseDto } from './dtos/standing-response-dto';

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
          if (isStandingResponseDtoType(genericResponse.response)) {
            let standings = new Array(
              ...genericResponse.response[0].league.standings[0]
            );
            this.orderRank(standings);
            this.addGoaldDifference(standings);
            return standings;
          }
          return [];
        })
      );
  }

  getLeagueId(leagueName: string, country: string): Observable<number> {
    return this.httpClient
      .get<GenericResponseDto>(
        `${this.BASE_PATH}/leagues?country=${country}&name=${leagueName}`
      )
      .pipe(
        map((genericResponse) => {
          if (isStandingResponseDtoType(genericResponse.response)) {
            return genericResponse.response[0].league.id;
          }
          return -1;
        })
      );
  }

  getLatestGameResults(
    teamId: string,
    season: number,
    nbLastGame: number
  ): Observable<FixtureResponseDto[]> {
    return (
      this.httpClient
        // .get<GenericResponseDto>(
        //   `${this.BASE_PATH}/fixtures?team=${teamId}&season=${season}&last=${nbLastGame}`
        // )
        .get<GenericResponseDto>(
          'app/services/football-api/mocks/ten-last-games-tottenham.json'
        )
        .pipe(
          map((genericResponse) => {
            if (isFixtureResponseDtoType(genericResponse.response)) {
              return genericResponse.response;
            }
            return [];
          })
        )
    );
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

function isStandingResponseDtoType(
  param: (StandingResponseDto | FixtureResponseDto)[]
): param is StandingResponseDto[] {
  return 'league' in param[0];
}

function isFixtureResponseDtoType(
  param: (StandingResponseDto | FixtureResponseDto)[]
): param is FixtureResponseDto[] {
  return 'teams' in param[0];
}
