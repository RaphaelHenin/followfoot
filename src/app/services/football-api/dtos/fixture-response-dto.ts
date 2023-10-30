import { Team } from './team';

export interface FixtureResponseDto {
  league: {
    country: string;
  };
  teams: {
    home: Team;
    away: Team;
  };
  goals: {
    home: number;
    away: number;
  };
}
