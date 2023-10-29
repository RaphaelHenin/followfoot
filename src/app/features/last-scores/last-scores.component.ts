import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FixtureResponseDto } from '../../services/football-api/dtos/fixture-response-dto';

@Component({
  selector: 'app-last-scores',
  templateUrl: './last-scores.component.html',
  styleUrls: ['./last-scores.component.css'],
})
export class LastScoresComponent implements OnInit {
  public lastestGameResult: FixtureResponseDto[];
  constructor(private actRoute: ActivatedRoute) {
    this.lastestGameResult = this.actRoute.snapshot.data['latestGameResults'];
  }

  ngOnInit(): void {}
}
