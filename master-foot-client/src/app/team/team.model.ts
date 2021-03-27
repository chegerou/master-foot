import { Stadium } from "../stadium/stadium.model";

export class Team {
  id: number;
  full_name: string;
  short_name: string;
  founded: Date;
  id_stadium?: number;
  stadium?: Stadium;

  constructor(team: any) {
    team = team || {};
    this.id = team.id || null;
    this.full_name = team.full_name || null;
    this.short_name = team.short_name || null;
    this.founded = team.founded || null;
    this.id_stadium = team.id_stadium || null
    this.stadium = team.stadium ? new Stadium(team.stadium) : undefined;
  }
}
