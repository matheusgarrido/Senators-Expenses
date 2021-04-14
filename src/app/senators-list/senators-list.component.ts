import { Component, OnInit } from '@angular/core';
import { API } from '../api.service';

@Component({
  selector: 'app-senators-list',
  templateUrl: './senators-list.component.html',
  styleUrls: ['./senators-list.component.scss'],
})
export class SenatorsListComponent implements OnInit {
  constructor(private API: API) {
    API.get();
  }

  ngOnInit(): void {}
}
