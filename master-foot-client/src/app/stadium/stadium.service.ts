import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { Stadium } from "./stadium.model";
import { MASTER_FOOT_API } from "../app.api";


@Injectable()
export class StadiumService {

  private base_url: string;

  constructor(private http: HttpClient) {
    this.base_url = `${MASTER_FOOT_API}/stadium`
  }

  create(stadium: Stadium): Observable<Stadium> {
    return this.http.post<Stadium>(this.base_url, stadium);
  };
}
