import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleComponent } from './schedule/schedule.component';
import { GameComponent } from './game/game.component';
import { TeamComponent } from './team/team.component';
import { RankingsComponent } from './rankings/rankings.component';

const routes: Routes = [
  {
    path: '',
    component: ScheduleComponent
  },
  {
    path: 'game/:id',
    component: GameComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'rankings',
    component: RankingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
