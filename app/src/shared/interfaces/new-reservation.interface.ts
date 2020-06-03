import { ReservationItems } from './reservation-items.interface';

export interface NewReservation {
  collaborator_id : number,
  resources       : ReservationItems[]
}
