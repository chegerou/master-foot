import { Player } from "../player/player.model";
import { Team } from "../team/team.model";

export class Transfer {
  id: number;
  origin: string;
  destination: string;
  moment: Date;
  id_player?: number;
  player?: Player;
  team_origin?: Team;
  team_destination?: Team;

  constructor(transfer: any) {
    transfer = transfer || {};
    this.id = transfer.id || null;
    this.origin = transfer.full_name || null;
    this.destination = transfer.short_name || null;
    this.moment = transfer.moment || null;
    this.id_player = transfer.id_player || null;
    this.player = transfer.player ? new Player(transfer.player) : undefined;
    this.team_origin = transfer.team_origin ? new Team(transfer.team_origin) : undefined;
    this.team_destination = transfer.team_destination ? new Team(transfer.team_destination) : undefined;
  }
}
