import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReservationControllerComponent } from './new-reservation.controller.component';

describe('NewReservationControllerComponent', () => {
  let component: NewReservationControllerComponent;
  let fixture: ComponentFixture<NewReservationControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewReservationControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReservationControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
