import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Senator {
  id: number;
  nomeSenador: string;
}

@Injectable({ providedIn: 'root' })
export class API {
  constructor(private HTTP: HttpClient) {}
  private urlFetch = 'http://localhost:3000';
  senators: Senator[] | null = null;
  get() {
    const URL = this.urlFetch + '/senadores';
    this.HTTP.get(URL).subscribe((res: Senator[]) => {
      this.senators = res;
      console.log(this.senators);
    });
    console.log(this.senators);
  }
}
