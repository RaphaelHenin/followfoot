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
        map(
          (genericResponse) => genericResponse.response[0].league.standings[0]
        )
      );
  }

  getLeagueId(leagueName: string, country: string): Observable<number> {
    return this.httpClient
      .get<GenericResponseDto>(
        `${this.BASE_PATH}/leagues?country=${country}&name=${leagueName}`
      )
      .pipe(map((genericResponse) => genericResponse.response[0].league.id));
  }
}
