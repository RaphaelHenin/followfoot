import { Team } from './team';

export interface FixtureResponseDto {
  teams: {
    home: Team;
    away: Team;
  };
  goals: {
    home: number;
    away: number;
  };
}
