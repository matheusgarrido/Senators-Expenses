import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenatorsListComponent } from './senators-list.component';

describe('SenatorsListComponent', () => {
  let component: SenatorsListComponent;
  let fixture: ComponentFixture<SenatorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenatorsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SenatorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
