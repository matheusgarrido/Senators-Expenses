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
  constructor(private API: API) {}
  private list: Array<SenatorsListType[]> = [];
  private totalPages = 0;

  private fetch() {
    try {
      this.API.get<SenatorsListType[]>('senadores').subscribe((res) => {
        this.totalPages = Math.ceil(res.length / 10);
        for (let i = 0; i <= this.totalPages; i++) {
          this.list.push(res.slice(i * 10, i * 10 + 10));
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  public getList() {
    try {
      if (!this.list.length) {
        this.fetch();
      }
      return this.list;
    } catch (err) {
      console.log(err);
    }
  }
  public getTotalPages() {
    return this.totalPages;
  }
}
