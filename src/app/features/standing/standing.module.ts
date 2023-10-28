import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StandingRoutingModule } from './standing-routing.module';
import { StandingComponent } from './standing.component';

@NgModule({
  declarations: [StandingComponent],
  imports: [CommonModule, StandingRoutingModule],
})
export class StandingModule {}
