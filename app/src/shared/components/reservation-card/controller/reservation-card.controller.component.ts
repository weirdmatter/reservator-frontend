import {Component, Input, OnInit} from '@angular/core';
import {Reservation} from "../../../interfaces/reservation.interface";
import {ReservationService} from "../../../services/reservations/reservation.service";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reservation-card',
  templateUrl: './reservation-card.controller.component.html',
  styleUrls: ['./reservation-card.controller.component.sass']
})
export class ReservationCardControllerComponent implements OnInit {

  @Input() data: Reservation

  constructor(
    private reservationService  : ReservationService,
    private snackbar            : MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  async onDeleteReservation(groupId: string) {
    await this.reservationService.deleteReservation(groupId)
      .then((res: object) => {
        window.location.reload()
      })
      .catch(err => {
        console.log('ERRO AO DELETAR RESERVA: ', err);
        this.snackbar.open('Erro ao deletar reserva.', 'Ok', {duration: 5000});
      } )
  }
}
