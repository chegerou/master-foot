import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StadiumComponent } from "./stadium.component";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StadiumService } from "./stadium.service";
import { CommonModule } from "@angular/common";

const ROUTES: Routes = [
  { path: '', component: StadiumComponent }
]

@NgModule({
  declarations: [StadiumComponent],
  imports: [
    RouterModule.forChild(ROUTES),
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  providers: [
    StadiumService
  ],
  exports: [StadiumComponent]
})

export class StadiumModule {

}
