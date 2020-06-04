import {Component, Input, OnInit} from '@angular/core';
import {Reservation} from "../../../interfaces/reservation.interface";

@Component({
  selector: 'app-reservation-card',
  templateUrl: './reservation-card.component.html',
  styleUrls: ['./reservation-card.component.sass']
})
export class ReservationCardComponent implements OnInit {

  @Input() data: Reservation

  constructor() { }

  ngOnInit(): void {
  }

}
