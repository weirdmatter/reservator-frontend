import { Injectable }   from '@angular/core';
import { HttpService }  from '../http/http.service';
import { Collaborator } from '../../interfaces/collaborator.interface';
import { CollaboratorCost } from 'src/shared/interfaces/collaborator-cost.interface';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {

  constructor(private http : HttpService) { }

  /**
   * Fetches all collaborators
   */
  getCollaborators() : Promise<Collaborator[]> {
    return this.http.get('collaborators');
  }

  /**
   * Fetches the cost of reservations made by all collaborators
   */
  getCollaboratorsTotalCost(start : string, end : string) : Promise<CollaboratorCost[]> {
    return this.http.get(`collaborators/costs?start=${start}&end=${end}`);
  }
}
