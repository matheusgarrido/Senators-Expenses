import { Component } from '@angular/core';
import { Senators } from '../services/senators.service';

@Component({
  selector: 'app-senators-list',
  templateUrl: './senators-list.component.html',
  styleUrls: ['./senators-list.component.scss'],
})
export class SenatorsListComponent {
  constructor(public Senators: Senators) {
    console.log(this.Senators.getList());
  }
  currentPage = 0;

  previousPage() {
    this.currentPage--;
  }
  nextPage() {
    this.currentPage++;
  }

  get FIRST_PAGE(): boolean {
    return this.currentPage === 0;
  }
  get LAST_PAGE(): boolean {
    return this.currentPage === this.Senators.getTotalPages() - 1;
  }
}
