import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Resource } from '../../interfaces/resource.interface';
import { ResourceCost } from '../../interfaces/resource-cost.interface';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private http : HttpService) {}

  /**
   * Fetches all resources
   */
  getResources() : Promise<Resource[]> {
    return this.http.get('resources');
  }

  /**
   * Fetches the generated reservation costs by all resources
   */
  getResourcesTotalCost(start : string, end: string) : Promise<ResourceCost[]> {
    return this.http.get(`resources/costs?start=${start}&end=${end}`);
  }
}
