import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { cfg } from '../config';
import * as jwt_decode from 'jwt-decode';

@Injectable()
export class AuthenticationService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private admin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();
  admin$ = this.admin.asObservable();

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get isAdmin() {
    return this.admin.asObservable();
  }

  constructor(private http: HttpClient, private router: Router) { 
    if ( localStorage.getItem('loggedIn') ) {
      this.loggedIn.next(true);
    } else {
      localStorage.clear();
      this.router.navigate(['/home']);
    }
  }

  setAdminState(state) {
    this.admin.next(state);
  }

  // Get the token
  getToken(): string {
    return localStorage.getItem('token');
  }

  // Set the token
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // 
  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) return null;

    const date = new Date(0); 
    date.setUTCSeconds(decoded.exp);
    return date;
  }
    
  isTokenExpired(token?: string): boolean {
    if(!token) token = this.getToken();
    if(!token) return true;

    const date = this.getTokenExpirationDate(token);
    if(date === undefined) return false;
    return date.valueOf() <= new Date().valueOf();
  }

  // Log a user in
  login(credentials) {
    return new Promise( ( resolve ) => { 
      this.http.put(`${cfg.apiUrl}/login`, credentials)
        .subscribe( data => {
          console.log('login data', data);
          let rs = data;
          if (rs['success']) {
            this.saveData(rs['data']);
            this.loggedIn.next(true);
          } 
          resolve(rs);
        }, err => resolve(err.error));
      })
  }

  // Register a user
  register(form) {
    return new Promise( ( resolve, reject ) => {
      this.http.post(`${cfg.apiUrl}/register`, form).subscribe( data => {
        let rs = data;
        this.saveData(rs['data']);
        this.loggedIn.next(true);
        resolve(rs);
      }, err => reject(err.error));
    });
  }

  refreshToken(form) {
    return new Promise( ( resolve ) => {
      this.http.post(`${cfg.apiUrl}/token`, form).subscribe( data => {
        localStorage.setItem('token', data['token]']);
      })
    })
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.clear();
    this.loggedIn.next(false);
    this.admin.next(false);
    this.router.navigate(['/home']);
  }

  // Save login session
  saveData(data) {
    localStorage.setItem('currentUser', JSON.stringify(data.user));
    localStorage.setItem('token', data.token);
    localStorage.setItem('refreshToken', data.refreshToken)
    localStorage.setItem('loggedIn', '1');
    return;
  }
}