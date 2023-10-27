import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FootballApiService } from 'src/app/services/football-api/football-api.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
})
export class LeaderboardComponent implements OnInit {
  private currentDate = new Date();
  public standing$ = this.footballApiService.getStandings(
    39,
    this.currentDate.getFullYear()
  );
  constructor(
    private footballApiService: FootballApiService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}
}
