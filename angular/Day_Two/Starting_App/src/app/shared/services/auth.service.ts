import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthData, LoginData, SignupData } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly url = `/api/v2`;
  private isAuthenticated = false;
  private authStatusListener = new EventEmitter<boolean>();
  private tokenTimer: any;
  private token: string;

  constructor(private http: HttpClient, private router: Router) { }

  login(data: LoginData): void {
    this.http.post<AuthData>(`${this.url}/user/login`, data).subscribe(
      (res) => this.loginSetup(res)
    );
  }

  signup(data: SignupData): void {
    this.http.post<AuthData>(`${this.url}/user/signup`, data).subscribe(
      (res) => this.loginSetup(res)
    );
  }

  private loginSetup(data: AuthData): void {
    // set AuthData in sessionStorage
    sessionStorage.setItem('token', data.token);
    this.token = data.token;
    // set a Date object to 'now' + data.expiresIn seconds
    const expirationDate = new Date((new Date()).getTime() + data.expiresIn * 1000);
    sessionStorage.setItem('expiration', expirationDate.toISOString());
    sessionStorage.setItem('id', data.id);
    // keep track of authenticated state and emit change to subscribers
    this.setAuthStatus(true);
    // set a logout timer
    this.setAuthTimer(data.expiresIn);
    // redirect the user back to the home page after a successful login
    this.router.navigate(['/']);
  }

  authStatusChanges(): Observable<boolean> {
    return this.authStatusListener.asObservable();
  }

  autoAuthUser(): void {
    // get AuthData from sessionStorage
    const expirationDate = sessionStorage.getItem('expiration');
    const storedToken = sessionStorage.getItem('token');
    if (!expirationDate || !storedToken) {
      // missing data, treat user as NOT authenticated
      this.setAuthStatus(false);
      return;
    }
    // set local copy of JWT
    this.token = storedToken;
    // calculate whether expiration date is in the future or not
    const now = new Date();
    const expiresIn = (new Date(expirationDate)).getTime() - now.getTime();
    if (expiresIn > 0) {
      // expiration date is in the future, treat user as authenticated
      this.setAuthStatus(true);
      // set a logout timer
      this.setAuthTimer(expiresIn / 1000);
    }
  }

  logout(): void {
    // remove data stored in sessionStorage
    sessionStorage.clear();
    this.token = null;
    // notify subscribers
    this.setAuthStatus(false);
    // clear logout timer
    clearTimeout(this.tokenTimer);
  }

  private setAuthStatus(authenticated: boolean): void {
    this.isAuthenticated = authenticated;
    this.authStatusListener.emit(authenticated);
  }

  /**
   * Set a timer to automatically logout when token expires.
   * @param duration - Timer duration in seconds
   */
  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  getAuthStatus(): boolean {
    return this.isAuthenticated;
  }

  getToken(): string {
    return this.token;
  }
}
