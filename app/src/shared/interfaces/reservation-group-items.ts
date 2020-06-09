import { Resource } from './resource.interface';

export interface ReservationGroupItems {
  resource    : Resource,
  begin_date  : string,
  end_date    : string,
  amount      : number,
  total_price : number
}
