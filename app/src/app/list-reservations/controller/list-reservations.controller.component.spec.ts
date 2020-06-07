import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReservationsControllerComponent } from './list-reservations.controller.component';

describe('ListReservationsControllerComponent', () => {
  let component: ListReservationsControllerComponent;
  let fixture: ComponentFixture<ListReservationsControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListReservationsControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReservationsControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
