import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Reservation} from "../../../interfaces/reservation.interface";

@Component({
  selector: 'app-ui-reservation-card',
  templateUrl: './reservation-card.presenter.component.html',
  styleUrls: ['./reservation-card.presenter.component.sass']
})
export class ReservationCardPresenterComponent implements OnInit {

  @Input() data     : Reservation
  @Output() delete  : EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {}

  onDeleteClick() {
    this.delete.emit(this.data.reservation_group_id)

  }
}
