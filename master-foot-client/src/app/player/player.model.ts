import { Team } from "../team/team.model";

export class Player {
  id: number;
  full_name: string;
  short_name: string;
  id_team?: number;
  team?: Team;

  constructor(player: any) {
    player = player || {};
    this.id = player.id || null;
    this.full_name = player.full_name || null;
    this.short_name = player.short_name || null;
    this.id_team = player.id_team || null
    this.team = player.stadium ? new Team(player.team) : undefined;
  }
}
