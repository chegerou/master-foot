import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Stadium } from './stadium.model';
import { StadiumService } from './stadium.service';

@Component({
  selector: 'mf-stadium',
  templateUrl: './statium.component.html',
})
export class StadiumComponent implements OnInit {

  stadium: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: StadiumService) {
    this.stadium = new FormGroup({
      full_name: this.fb.control('',[Validators.required]),
      short_name: this.fb.control('',[Validators.required]),
      capacity: this.fb.control('',[Validators.required]),
    });
   }

  ngOnInit() {
  }

  onSubmit():void {
    this.service.create(new Stadium(this.stadium.value));
  }

}
