import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Router, RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StadiumModule } from './stadium/stadium.module';
import { HttpClientModule } from '@angular/common/http';
import { TeamModule } from './team/team.module';
import { PlayerModule } from './player/player.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    HttpClientModule,

    StadiumModule,
    TeamModule,
    PlayerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
