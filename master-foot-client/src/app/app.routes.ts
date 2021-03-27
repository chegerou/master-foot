import { Routes } from "@angular/router";
import { StadiumComponent } from "./stadium/stadium.component";
import { TeamComponent } from "./team/team.component";

export const ROUTES: Routes = [
  {path: '', component: StadiumComponent},
  {path: 'estadios', component: StadiumComponent},
  {path: 'times', component: TeamComponent},
]
