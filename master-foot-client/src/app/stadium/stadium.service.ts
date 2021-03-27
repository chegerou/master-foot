import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Stadium } from "./stadium.model";
import { MASTER_FOOT_API } from "../app.api";

@Injectable()
export class StadiumService {

  constructor(private http: HttpClient) {}

  create(stadium: Stadium): Observable<Stadium> {
    return this.http.post<Stadium>(`${MASTER_FOOT_API}/stadium`, stadium);
  };
}
