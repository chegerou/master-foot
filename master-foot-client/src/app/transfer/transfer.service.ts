import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Transfer } from "./transfer.model";
import { MASTER_FOOT_API } from "../app.api";

@Injectable()
export class TransferService {

  constructor(private http: HttpClient) {}

  create(transfer: Transfer): Observable<Transfer> {
    return this.http.post<Transfer>(`${MASTER_FOOT_API}/transfer`, transfer);
  };

  list(id: number): Observable<Transfer[]> {
    return this.http.get<Transfer[]>(`${MASTER_FOOT_API}/transfer/player/${id}`);
  }
}
