import { Component, OnInit } from '@angular/core';
import { API } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'senator-information',
  templateUrl: './senator-information.component.html',
  styleUrls: ['./senator-information.component.scss'],
})
export class SenatorInformationComponent implements OnInit {
  constructor(private API: API, private route: ActivatedRoute) {}
  id: number;
  ngOnInit() {
    this.id = this.route.snapshot.params.id;
  }
}
