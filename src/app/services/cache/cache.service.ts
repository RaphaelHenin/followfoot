import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MajorLeagueData } from '../../models/major-league-data';
import { Standing } from '../football-api/dtos/standing';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private cache = new Map<string, MajorLeagueData>();
  public cache$ = new BehaviorSubject<MajorLeagueData>({
    idLeague: 0,
    leagueName: '',
    standings: [] as Standing[],
  });

  constructor() {
    console.log('Construction du cache');
  }

  set(key: string, data: any): void {
    console.log('Ajout cache :');
    console.log(key);
    console.log(data);
    this.cache.set(key, data);
    this.cache$.next(this.cache.get(key)!);
  }

  get(key: string): MajorLeagueData | undefined {
    const data = this.cache.get(key);
    console.log('Récupération dans cache pour la clé {}:', key);
    console.log(data);
    if (data) {
      this.cache$.next(data);
    }
    return data;
  }

  clear(key: string): void {
    this.cache.delete(key);
    this.cache$.next({
      idLeague: 0,
      leagueName: '',
      standings: [] as Standing[],
    });
  }
}
