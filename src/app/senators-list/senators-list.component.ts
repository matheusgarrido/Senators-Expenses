import { Component } from '@angular/core';
import { Senators, SenatorsListType } from '../services/senators.service';

@Component({
  selector: 'app-senators-list',
  templateUrl: './senators-list.component.html',
  styleUrls: ['./senators-list.component.scss'],
})
export class SenatorsListComponent {
  constructor(public Senators: Senators) {
    this.Senators.getList;
  }
  currentPage: number = 0;
  pageSize: number = 10;

  changePage(event) {
    //Updating page values
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  get SENATORS(): SenatorsListType[] {
    return this.Senators.getList.slice(
      this.pageSize * this.currentPage,
      this.pageSize * this.currentPage + this.pageSize
    );
  }
  get FIRST_PAGE(): boolean {
    return this.currentPage === 0;
  }
  get LAST_PAGE(): boolean {
    return this.currentPage === this.Senators.getTotalPages - 1;
  }
}
