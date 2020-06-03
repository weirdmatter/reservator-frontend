import { Resource } from './resource.interface';

export interface Reservation {
  reservation_group_id  : string,
  collaborator_id       : number,
  total_price           : number,
  resources             : Resource[],
  creation_date         : Date,
  begin_date            : Date,
  end_date              : Date
}
