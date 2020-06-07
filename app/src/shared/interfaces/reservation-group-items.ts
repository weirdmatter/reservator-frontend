import { Resource } from './resource.interface';

export interface ReservationGroupItems {
  resource    : Resource,
  begin_date  : Date,
  end_date    : Date,
  amount      : number,
  total_price : number
}
