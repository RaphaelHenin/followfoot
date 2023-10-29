import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CacheService } from '../../services/cache/cache.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.css'],
})
export class StandingComponent implements OnInit {
  public majorLeagueInfo$ = this.cacheService.cache$;
  constructor(private cacheService: CacheService, private router: Router) {}

  ngOnInit(): void {}

  displayLastGames(teamId: number) {
    this.router.navigate(['last-scores', teamId]);
  }
}
