import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { GLOBAL } from "./global";
import { UserModel} from "../models/User.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url: string
  public identity: any;
  public token: string;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  registerUser(user: UserModel): Observable<any> {
    let header = new HttpHeaders().set('Content-type', 'application/json');
    return this._http.post(this.url + '/user/register', user, {headers: header});
  }

  loginUser(user): Observable<any> {
    let header = new HttpHeaders().set('Content-type', 'application/json');
    return this._http.post(this.url + '/user/login', user, {headers: header});
  }

  getIdentity() {
    let identity = JSON.parse(localStorage.getItem('identity'));
    if (identity != 'undefined') {
      this.identity = identity
    } else {
      this.identity = null;
    }
    return this.identity;
  }

  getToken() {
    let token = localStorage.getItem('token');
    if (token != 'undefined') {
      this.token = token;
    } else {
      this.token = null
    }
    return this.token;
  }

}
