import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchDetailComponent } from './match-detail/match-detail.component';
import { MatchComponent } from './match/match.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamComponent } from './team/team.component';
import { PlayerComponent } from './player/player.component';


const routes: Routes =[
  {path:'matchdetail/:id',component:MatchDetailComponent},
  {path:'match',component:MatchComponent},
  {path:'team',component:TeamComponent},
  {path:'player',component:PlayerComponent},
  {path:'team-detail/:id',component:TeamDetailComponent},
  {path:'',redirectTo:'/match',pathMatch:'full'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})

export class AppRoutingModule { }