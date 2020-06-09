import { ResourceType } from '../enums/resource-type.enum';

export interface Resource {
  resource_id       : number,
  code              : string,
  name              : string,
  // total_amount      : number,
  available_amount  : number,
  price             : number,
  type              : ResourceType,
  seat_amount       ?: number,
  room_size         ?: number
}
