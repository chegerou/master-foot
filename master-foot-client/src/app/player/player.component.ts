import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Player } from './player.model';
import { PlayerService } from './player.service';


@Component({
  selector: 'mf-player',
  templateUrl: './player.component.html',
})
export class PlayerComponent implements OnInit {

  player: FormGroup;
  newPlayer: Player | undefined;
  isNewPlayer: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: PlayerService) {
      this.player = new FormGroup({
        full_name: this.fb.control('', [Validators.required]),
        short_name: this.fb.control('', [Validators.required]),
        id_team: this.fb.control('', [Validators.required]),
      });
  }

  ngOnInit() {
  }

  onSubmit(): void {
    this.service.create(new Player(this.player?.value))
      .subscribe(player =>{
        this.newPlayer = new Player(player);
        this.isNewPlayer = true;
      });
  }

}
