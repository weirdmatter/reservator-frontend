import { Injectable }   from '@angular/core';
import { HttpService }  from '../http/http.service';
import {AdminConfig} from "../../interfaces/admin-config.interface";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpService) { }

  /**
   * Set admin config for price calculation
   */
  setAdminConfig(data: AdminConfig) : Promise<any>{
    return this.http.post('admin', data);
  }

  /**
   * Get actual admin config for price calculation
   */
  getAdminConfig() : Promise<AdminConfig> {
    return this.http.get('admin');
  }
}
