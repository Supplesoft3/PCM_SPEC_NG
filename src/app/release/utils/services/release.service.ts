import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddSblModel } from '../models/sbl.model';
import { AddPblModel } from '../models/pbl.model';

@Injectable({
  providedIn: 'root'
})
export class ReleaseService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  addSbl(sblData : AddSblModel): Observable<any> {
    return this.http.post(`${this.apiUrl}/sblData`, {...sblData, isDeleted : false});
  }

  addPbl(pblData: AddPblModel):Observable <any>{
    return this.http.post(`${this.apiUrl}/pblData`,{...pblData, isDeleted:false})
  }

  // Other CRUD operations can be defined here
}
