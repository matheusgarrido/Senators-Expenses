import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenatorInformationComponent } from './senator-information.component';

describe('SenatorInformationComponent', () => {
  let component: SenatorInformationComponent;
  let fixture: ComponentFixture<SenatorInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenatorInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SenatorInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
