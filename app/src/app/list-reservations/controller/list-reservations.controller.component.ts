import { Component, OnInit }  from '@angular/core';
import { ReservationService } from '../../../shared/services/reservations/reservation.service';
import { ListingConfig } from '../../../shared/interfaces/listing-config.interface';
import { Reservation }        from 'src/shared/interfaces/reservation.interface';

@Component({
  selector: 'app-list-reservations',
  templateUrl: './list-reservations.controller.component.html',
  styleUrls: ['./list-reservations.controller.component.sass']
})
export class ListReservationsControllerComponent implements OnInit {

  reservationListingConfig : ListingConfig;

  constructor(private reservations : ReservationService) { }

  ngOnInit(): void {
    this.buildReservationsListingConfig();
  }

  private async buildReservationsListingConfig() {
    const reservations : Reservation[] = await this.reservations.getReservations();

    this.reservationListingConfig = {
      title     : 'Reservas',
      subtitle  : 'Selecione uma data de início e uma data de término para pesquisar por reservas efetuadas entre estes períodos de tempo.',
      hasFilter : true,
      hasAction : true,
      data      : reservations,
      cardType  : 'RESERVATION'
    }

  }

  async searchReservations(dates : object) {
    const reservations : Reservation[] = await this.reservations.getReservations(dates);

    this.reservationListingConfig.data = reservations;
  }

  newReservation() {
    this.reservations.openNewReservationComponent();
  }




}
