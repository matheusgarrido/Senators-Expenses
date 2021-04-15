import { Injectable } from '@angular/core';
import { API } from './api.service';

export interface SenatorsListType {
  id: number;
  nomeSenador: string;
}
@Injectable({
  providedIn: 'root',
})
export class Senators {
  constructor(private API: API) {
    this.fetch();
  }
  private list: SenatorsListType[] = [];
  private totalPages = 0;

  private fetch() {
    return this.API.get<SenatorsListType[]>('senadores').subscribe((res) => {
      this.list = res;
      return res;
    });
  }

  get getList(): SenatorsListType[] {
    return this.list;
  }

  get getTotalPages(): number {
    return this.totalPages;
  }
}
