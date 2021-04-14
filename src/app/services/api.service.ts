import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface SenatorList {
  id: number;
  nomeSenador: string;
}
@Injectable({ providedIn: 'root' })
export class API {
  constructor(private HTTP: HttpClient) {}
  private urlFetch = 'http://localhost:3000/';

  get<T>(urlSuffix): Observable<T> {
    const URL = this.urlFetch + urlSuffix;
    return this.HTTP.get<T>(URL);
  }
}
