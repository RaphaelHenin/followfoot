import { Injectable } from '@angular/core';
import { Standing } from '../football-api/dtos/standing';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private cache = new Map<
    string,
    {
      idLeague: number;
      leagueName: string;
      standings: Standing[];
    }
  >();
  //public cache$ = new BehaviorSubject<any>(null);

  constructor() {
    console.log('Construction du cache');
  }

  set(key: string, data: any): void {
    console.log('Ajout cache :');
    console.log(key);
    console.log(data);
    this.cache.set(key, data);
    //this.cache$.next(this.cache.get(key));
  }

  get(key: string):
    | {
        idLeague: number;
        leagueName: string;
        standings: Standing[];
      }
    | undefined {
    const data = this.cache.get(key);
    console.log('Récupération dans cache pour la clé {}:', key);
    console.log(data);
    return data;
  }

  clear(key: string): void {
    this.cache.delete(key);
    //this.cache$.next(null);
  }
}
