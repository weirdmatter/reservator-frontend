import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReservationPresenterComponent } from './new-reservation.presenter.component';

describe('NewReservationPresenterComponent', () => {
  let component: NewReservationPresenterComponent;
  let fixture: ComponentFixture<NewReservationPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewReservationPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReservationPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
