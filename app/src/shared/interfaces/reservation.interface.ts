import {ReservationGroupItems} from "./reservation-group-items";

export interface Reservation {
  reservation_group_id      : string,
  // collaborator_registration : string,,
  collaborator_id           : number,
  total_price               : number,
  resources                 : ReservationGroupItems[],
  creation_date             : string
}
