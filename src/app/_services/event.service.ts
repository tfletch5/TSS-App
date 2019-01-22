import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cfg } from '../config';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEvents() {
    return new Promise( ( resolve ) => {
      this.http.get(`${cfg.apiUrl}/events`)
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }

  getEvent(id) {
    return new Promise( ( resolve ) => {
      this.http.get(`${cfg.apiUrl}/events/${id}`)
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }

  addEvent(form) {
    return new Promise( ( resolve ) => {
      this.http.post(`${cfg.apiUrl}/events`, form)
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }

  updateEvent(form, id) {
    return new Promise( ( resolve ) => {
      this.http.patch(`${cfg.apiUrl}/events/${id}`, form)
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }

  deleteEvent(id) {
    return new Promise( ( resolve ) => {
      this.http.delete(`${cfg.apiUrl}/events/${id}`)
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }

  purchaseEvent(payment) {
    return new Promise( ( resolve ) => {
      this.http.post(`${cfg.apiUrl}/stripe/charges`, payment)
        .subscribe( data => {
          resolve(data);
        }, err => console.log(err));
    })
  }

  saveTransaction(transaction) {
    return new Promise( ( resolve ) => {
      this.http.post(`${cfg.apiUrl}/transactions`, transaction)
        .subscribe( data => {
          resolve(data);
        }, err => console.log(err));
    })
  }
}
