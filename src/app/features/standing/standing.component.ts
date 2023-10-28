import { Component, OnInit } from '@angular/core';
import { CacheService } from '../../services/cache/cache.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.css'],
})
export class StandingComponent implements OnInit {
  public majorLeagueInfo$ = this.cacheService.cache$;
  constructor(private cacheService: CacheService) {}

  ngOnInit(): void {}
}
