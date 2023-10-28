import { Standing } from '../services/football-api/dtos/standing';

export interface MajorLeagueData {
  idLeague: number;
  leagueName: string;
  standings: Standing[];
}
