import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LatestGameResultsResolver } from '../../services/resolver/latest-game-results.resolver';
import { LastScoresComponent } from './last-scores.component';

const routes: Routes = [
  {
    path: '',
    component: LastScoresComponent,
    resolve: { latestGameResults: LatestGameResultsResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LastScoresRoutingModule {}
