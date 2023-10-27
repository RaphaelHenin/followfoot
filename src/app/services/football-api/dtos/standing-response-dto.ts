import { Standing } from './standing';

export interface StandingResponseDto {
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    standings: Array<Array<Standing>>;
  };
}
