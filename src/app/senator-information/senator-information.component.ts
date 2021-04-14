import { Component, OnInit } from '@angular/core';
import { API } from '../api.service';

@Component({
  selector: 'senator-information',
  templateUrl: './senator-information.component.html',
  styleUrls: ['./senator-information.component.scss'],
})
export class SenatorInformationComponent implements OnInit {
  constructor(private API: API) {
    API.get();
  }

  ngOnInit(): void {}
}
