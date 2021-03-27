import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {PlayerComponent } from "./player.component";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {PlayerService } from "./player.service";

const ROUTES: Routes = [
  { path: '', component:PlayerComponent }
]

@NgModule({
  declarations: [PlayerComponent],
  imports: [
    RouterModule.forChild(ROUTES),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    PlayerService
  ],
  exports: [PlayerComponent]
})

export class PlayerModule {

}
