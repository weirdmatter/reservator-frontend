import { Injectable }   from '@angular/core';
import { environment }  from '../../../environments/environment';
import { HttpClient }   from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient : HttpClient) { }

  /**
   * Posts a new entry
   * @param route The backend endpoint to be posted at
   * @param payload The data to be sent
   */
  post(route: string, payload: any): Promise<any> {
    return this.httpClient.post(`${environment.apiBaseUrl}/${route}`, payload).toPromise();
  }

  /**
   * Fetches content from a given endpoint
   * @param route The endpoint
   */
  get(route: string) : Promise<any> {
    return this.httpClient.get(`${environment.apiBaseUrl}/${route}`).toPromise();
  }

  /**
   * Deletes an entry from a given endpoint
   * @param route The endpoint
   */
  delete(route: string) : Promise<any> {
    return this.httpClient.delete(`${environment.apiBaseUrl}/${route}`).toPromise();
  }

  /**
   * Puts a new entry
   * @param route The backend endpoint to be posted at
   * @param payload The data to be sent
   */
  put(route: string, payload: any) : Promise<any> {
    return this.httpClient.put(`${environment.apiBaseUrl}/${route}`, payload).toPromise();
  }
}
