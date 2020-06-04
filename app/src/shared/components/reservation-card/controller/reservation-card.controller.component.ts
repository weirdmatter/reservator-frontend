import {Component, Input, OnInit} from '@angular/core';
import {Reservation} from "../../../interfaces/reservation.interface";
import {ReservationService} from "../../../services/reservations/reservation.service";

@Component({
  selector: 'app-reservation-card',
  templateUrl: './reservation-card.controller.component.html',
  styleUrls: ['./reservation-card.controller.component.sass']
})
export class ReservationCardControllerComponent implements OnInit {

  @Input() data: Reservation

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
  }

  async onDeleteReservation(groupId: string) {
    await this.reservationService.deleteReservation(groupId).catch(err => {
      console.log(err)
    })
  }

}
