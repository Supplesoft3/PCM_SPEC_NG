import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddSblModel } from './release/utils/models/app.model';

@Injectable({
  providedIn: 'root'
})
export class PcmSpecNgService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  addSbl(sblData : AddSblModel): Observable<any> {
    return this.http.post(`${this.apiUrl}/sblData`, {...sblData, isDeleted : false});
  }

  // Other CRUD operations can be defined here
}
