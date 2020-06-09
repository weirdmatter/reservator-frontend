import { Collaborator } from './collaborator.interface';
import { Resource }     from './resource.interface';

export interface NewReservationConfig {
  collaborators : Collaborator[],
  resources     : Resource[]
}
