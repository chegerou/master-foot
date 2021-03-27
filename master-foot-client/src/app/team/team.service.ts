import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Team } from "./team.model";
import { MASTER_FOOT_API } from "../app.api";

@Injectable()
export class TeamService {

  constructor(private http: HttpClient) {}

  create(team: Team): Observable<Team> {
    return this.http.post<Team>(`${MASTER_FOOT_API}/team`, team);
  };
}
