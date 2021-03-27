import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Player } from "./player.model";
import { MASTER_FOOT_API } from "../app.api";

@Injectable()
export class PlayerService {

  constructor(private http: HttpClient) {}

  create(player: Player): Observable<Player> {
    return this.http.post<Player>(`${MASTER_FOOT_API}/player`, player);
  };
}
