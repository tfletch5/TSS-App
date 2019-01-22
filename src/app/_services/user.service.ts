import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cfg } from '../config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // Verify ambassador code
  checkCode(id) {
    return new Promise( ( resolve ) => {
      this.http.get(`${cfg.apiUrl}/code/${id}`)
        .subscribe( data => {
          resolve(data);
        }, err => resolve(err.error));
    });
  }

  // Get locations for home page
  getLocations() {
    return new Promise( ( resolve ) => {
      this.http.get(`${cfg.apiUrl}/getlocations`)
        .subscribe( data => {
          resolve(data);
        }, err => resolve(err.error));
    });
  }

  // Get Users
  getUsers() {
    return new Promise( ( resolve ) => {
      this.http.get(`${cfg.apiUrl}/users`)
        .subscribe( data => {
          resolve(data);
        }, err => resolve(err.error));
    });
  }

  // Get specific user
  getUser(id) {
    return new Promise( ( resolve ) => {
      this.http.get(`${cfg.apiUrl}/users/${id}`)
        .subscribe( data => {
          resolve(data);
        }, err => resolve(err.error));
    });
  }

  // Add a user
  addUser(form) {
    return new Promise( ( resolve ) => {
      this.http.post(`${cfg.apiUrl}/users`, form)
        .subscribe( data => {
          resolve(data);
        }, err => resolve(err.error));
    });
  }

  // Update a user
  updateUser(form, id) {
    return new Promise( ( resolve ) => {
      this.http.patch(`${cfg.apiUrl}/users/${id}`, form)
        .subscribe( data => {
          resolve(data);
        }, err => resolve(err.error));
    });
  }

  // Delete a user
  deleteUser(id) {
    return new Promise( ( resolve ) => {
      this.http.delete(`${cfg.apiUrl}/users/${id}`)
        .subscribe( data => {
          resolve(data);
        }, err => resolve(err.error));
    });
  }

  // Get Events by User
  getEventsByUser(id) {
    return new Promise( ( resolve ) => {
      this.http.get(`${cfg.apiUrl}/users/${id}/events`)
        .subscribe( data => {
          resolve(data);
        }, err => resolve(err.error));
    });
  }


  // Subscription to a membership
  subscribeToMembership(customer_id, plan_id) {
    return new Promise( ( resolve ) => {
      var sub = {
        customer: customer_id,
        items: [{ plan: plan_id }]
      }
      this.http.post(`${cfg.apiUrl}/stripe/subscriptions`, sub)
        .subscribe( data => {
          resolve(data);
        }, err => resolve(err.error));
    });
  }

  getMembership(id: any) {
    return new Promise( (resolve) => {
      this.http.get(`${cfg.apiUrl}/users/${id}/membership`)
        .subscribe( data => {
          resolve(data)
        }, err => resolve(err.error));
    })
  }

  attachSource(source) {
    return new Promise( ( resolve ) => {
      this.http.post(`${cfg.apiUrl}/stripe/sources`, source)
        .subscribe( data => {
          resolve(data);
        }, err => resolve(err.error));
    });
  }
  

  // Save login session
  saveData(data) {
    localStorage.setItem('currentUser', JSON.stringify(data.user));
    localStorage.setItem('token', data.token);
    localStorage.setItem('authenticated', '1');
    return;
  }
}
