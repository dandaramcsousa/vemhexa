import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { GameComponent } from './game/game.component';
import { TeamComponent } from './team/team.component';
import { RankingsComponent } from './rankings/rankings.component';

import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ScheduleComponent,
    GameComponent,
    TeamComponent,
    RankingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
