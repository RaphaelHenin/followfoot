import { StandingResponseDto } from './standing-response-dto';

export interface GenericResponseDto {
  get: string;
  parameters: any;
  errors: string[] | {};
  results: number;
  paging: { current: string; total: string };
  response: Array<StandingResponseDto>;
}
