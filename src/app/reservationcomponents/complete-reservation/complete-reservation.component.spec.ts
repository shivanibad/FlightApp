import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteReservationComponent } from './complete-reservation.component';

describe('CompleteReservationComponent', () => {
  let component: CompleteReservationComponent;
  let fixture: ComponentFixture<CompleteReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
