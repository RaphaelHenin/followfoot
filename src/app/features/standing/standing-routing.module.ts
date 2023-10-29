import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryMajorLeagueDataResolver } from '../../services/resolver/country-major-league-data.resolver';
import { StandingComponent } from './standing.component';

const routes: Routes = [
  {
    path: '',
    component: StandingComponent,
    resolve: { majorLeagueData: CountryMajorLeagueDataResolver },
  },
  {
    path: 'last-scores/:team',
    loadChildren: () =>
      import('../last-scores/last-scores.module').then(
        (m) => m.LastScoresModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StandingRoutingModule {}
