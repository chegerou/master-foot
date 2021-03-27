import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TransferComponent } from "./transfer.component";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TransferService } from "./transfer.service";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

const ROUTES: Routes = [
  { path: '', component: TransferComponent }
]

@NgModule({
  declarations: [TransferComponent],
  imports: [
    RouterModule.forChild(ROUTES),
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BrowserModule
  ],
  providers: [
    TransferService
  ],
  exports: [TransferComponent]
})

export class TransferModule {

}
