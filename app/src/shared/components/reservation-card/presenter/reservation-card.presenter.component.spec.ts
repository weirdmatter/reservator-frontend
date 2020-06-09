import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationCardPresenterComponent } from './reservation-card.presenter.component';

describe('ReservationCardPresenterComponent', () => {
  let component: ReservationCardPresenterComponent;
  let fixture: ComponentFixture<ReservationCardPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationCardPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationCardPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
