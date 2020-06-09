import {Resource}     from "./resource.interface";
import {Collaborator} from "./collaborator.interface";
import {Reservation}  from "./reservation.interface";
import {CollaboratorCost} from "./collaborator-cost.interface";

export interface ListingConfig {
  title: string,
  subtitle: string,
  hasFilter: boolean,
  hasAction: boolean,
  data: Reservation[] | Collaborator[] | Resource[] | CollaboratorCost[],
  cardType: string
}
