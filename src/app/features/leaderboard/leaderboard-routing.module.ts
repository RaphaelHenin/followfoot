import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderboardComponent } from './leaderboard.component';

const routes: Routes = [
  {
    path: '',
    component: LeaderboardComponent,
  },
  {
    path: ':team/last-scores',
    loadChildren: () =>
      import('src/app/features/last-scores/last-scores.module').then(
        (m) => m.LastScoresModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaderboardRoutingModule {}
