import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StadiumComponent } from "./stadium.component";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StadiumService } from "./stadium.service";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

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
    CommonModule,
    BrowserModule
  ],
  providers: [
    StadiumService
  ],
  exports: [StadiumComponent]
})

export class StadiumModule {

}
