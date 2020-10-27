import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { GLOBAL} from "./global";
import { Observable } from "rxjs";
import { CarModel} from "../models/Car.model";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  public url: string;
  public token: string;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
    this.token = localStorage.getItem('token');
  }

  createCar(token, car: CarModel): Observable<any> {
    return this._http.post(this.url + '/car/create', car, {headers:{
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    });
  }

  carList(): Observable<any> {
    return  this._http.get(this.url + '/car', {
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      }
    });

  }

  carDetails(id): Observable<any>{
    return this._http.get(this.url + '/car/' + id, {
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      }
    });
  }

  carEdit(id, car): Observable<any>{
    return this._http.put(this.url + '/car/update/' + id, car, {
      headers:{
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      }
    })
  }

  carDelete(id): Observable<any> {
    return this._http.delete(this.url + '/car/destroy/' + id, {
      headers:{
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      }
    })
  }

}
