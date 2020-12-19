import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginData, SignupData } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly url = `/api/v2`;

  constructor(private http: HttpClient) { }

  login(data: LoginData) {
    return this.http.post(`${this.url}/user/login`, data);
  }

  signup(data: SignupData) {
    return this.http.post(`${this.url}/user/signup`, data);
  }
}
