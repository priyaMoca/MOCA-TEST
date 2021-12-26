import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MocaServiceService {
  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.serviceEndpoints['ApiUrl'];
  }

  public getCryptoCurrencies(currency:string){
    let url = this.baseUrl + 'coins?' + 'currency='+currency;
    return this.httpClient.get(url);
  }

  public getExchanges(currency:string){
    let url = this.baseUrl + 'exchanges?' + 'currency='+currency;
    return this.httpClient.get(url);
  }
}
