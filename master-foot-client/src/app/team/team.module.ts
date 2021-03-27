import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TeamComponent } from "./team.component";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TeamService } from "./team.service";

const ROUTES: Routes = [
  { path: '', component: TeamComponent }
]

@NgModule({
  declarations: [TeamComponent],
  imports: [
    RouterModule.forChild(ROUTES),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    TeamService
  ],
  exports: [TeamComponent]
})

export class TeamModule {

}
