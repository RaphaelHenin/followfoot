import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-last-scores',
  templateUrl: './last-scores.component.html',
  styleUrls: ['./last-scores.component.css'],
})
export class LastScoresComponent implements OnInit {
  backToStandingOf(arg0: any) {
    throw new Error('Method not implemented.');
  }
  public lastestGameResult: any;
  constructor(private actRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.lastestGameResult = this.actRoute.snapshot.data['latestGameResults'];
  }
}
