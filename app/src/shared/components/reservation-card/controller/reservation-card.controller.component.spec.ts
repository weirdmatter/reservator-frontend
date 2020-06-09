import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationCardControllerComponent } from './reservation-card.controller.component';

describe('ReservationCardControllerComponent', () => {
  let component: ReservationCardControllerComponent;
  let fixture: ComponentFixture<ReservationCardControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationCardControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationCardControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
