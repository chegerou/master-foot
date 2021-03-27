import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Team } from './team.model';
import { TeamService } from './team.service';


@Component({
  selector: 'mf-team',
  templateUrl: './team.component.html',
})
export class TeamComponent implements OnInit {

  team: FormGroup;
  newTeam: Team | undefined;
  isNewTeam: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: TeamService) {
      this.team = new FormGroup({
        full_name: this.fb.control('', [Validators.required]),
        short_name: this.fb.control('', [Validators.required]),
        founded: this.fb.control('', [Validators.required]),
        id_stadium: this.fb.control('', [Validators.required]),
      });
  }

  ngOnInit() {
  }

  onSubmit(): void {
    this.service.create(new Team(this.team?.value))
      .subscribe(team =>{
        this.newTeam = new Team(team);
        this.isNewTeam = true;
      });
  }

}
