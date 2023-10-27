import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LastScoresRoutingModule } from './last-scores-routing.module';
import { LastScoresComponent } from './last-scores.component';


@NgModule({
  declarations: [
    LastScoresComponent
  ],
  imports: [
    CommonModule,
    LastScoresRoutingModule
  ]
})
export class LastScoresModule { }
