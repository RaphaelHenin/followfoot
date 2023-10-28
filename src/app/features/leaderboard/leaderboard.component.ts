import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
})
export class LeaderboardComponent implements OnInit {
  public majorLeagueData = this.actRoute.snapshot.data['majorLeagueData'];
  constructor(private actRoute: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.majorLeagueData);
  }
}
