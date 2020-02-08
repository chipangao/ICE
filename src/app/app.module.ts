import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatchComponent } from './match/match.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { GetteamIdPipe } from './getteam-id.pipe';
import { GetteamUrlPipe } from './getteam-url.pipe';
import { GetmatchIdPipe } from './getmatch-id.pipe';
import { TeamComponent } from './team/team.component';
import { SortdatePipe } from './sortdate.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { MatchDetailComponent } from './match-detail/match-detail.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { PlayerComponent } from './player/player.component';
import { SteamDetailComponent } from './steam-detail/steam-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NavbarComponent,
    MatchComponent,
    GetteamIdPipe,
    GetteamUrlPipe,
    GetmatchIdPipe,
    TeamComponent,
    SortdatePipe,
    MatchDetailComponent,
    TeamDetailComponent,
    PlayerComponent,
    SteamDetailComponent,
  ],
  imports: [
    BrowserModule, NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
