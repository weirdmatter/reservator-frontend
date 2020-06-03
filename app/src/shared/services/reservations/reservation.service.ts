import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Reservation } from 'src/shared/interfaces/reservation.interface';
import { NewReservation } from 'src/shared/interfaces/new-reservation.interface';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http : HttpService) {}

  /**
   * Fetches all reservations
   */
  getReservations() : Promise<Reservation[]> {
    return this.http.get('reservations');
  }

  /**
   * Deletes the reservation containing the given group id
   * @param reservation_group_id An id to identify resources which are part of the same reservation
   */
  deleteReservation(reservation_group_id : string) : Promise<any> {
    return this.http.delete(`reservations/delete?group_id=${reservation_group_id}`);
  }

  /**
   * Creates a new reservation
   * @param data The reservation data to be sent to the backend
   */
  createReservation(data : NewReservation) : Promise<Reservation> {
    return this.http.post('reservations', data);
  }

  /**
   * Creates a new instance of the NewReservationComponent, displaying it to the user
   */
  openNewReservationComponent() {
    // @TODO
  }


}
