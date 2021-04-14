import { Component } from '@angular/core';
import { API } from '../services/api.service';

@Component({
  selector: 'senator-information',
  templateUrl: './senator-information.component.html',
  styleUrls: ['./senator-information.component.scss'],
})
export class SenatorInformationComponent {
  constructor(private API: API) {}
}
