import { Component, OnInit } from '@angular/core';
import { Senator } from '../services/senators.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'senator-information',
  templateUrl: './senator-information.component.html',
  styleUrls: ['./senator-information.component.scss'],
  providers: [{ provide: 'senatorId', useValue: '155' }],
})
export class SenatorInformationComponent implements OnInit {
  constructor(public Senator: Senator, private route: ActivatedRoute) {}
  id: number;
  displayedColumns = ['fornec', 'tipo', 'valor', 'data'];

  get sortExpenses() {
    return this.Senator.getSenator?.despesas?.sort((a, b) => {
      return a.data.getTime() - b.data.getTime();
    });
  }
  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.Senator.setId = this.id;
  }
}
