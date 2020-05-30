import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  constructor(private http : HttpClient) { }

  async test() {
    const a = await this.http.get('http://elite-gym-api.herokuapp.com/').toPromise();
    debugger;
    return a;
  }
}
