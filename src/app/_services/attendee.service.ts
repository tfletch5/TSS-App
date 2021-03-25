import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cfg } from '../config';

@Injectable({
  providedIn: 'root'
})
export class AttendeeService {

  constructor(private http: HttpClient) { }

  getAttendees() {
    return new Promise( ( resolve, reject ) => {
      this.http.get(`${cfg.apiUrl}/attendees`)
        .subscribe( data => {
          resolve(data);
      }, err => reject(err));
    });
  }

  getAttendee(id) {
    return new Promise( ( resolve, reject ) => {
      this.http.get(`${cfg.apiUrl}/attendees/${id}`)
        .subscribe( data => {
          resolve(data);
      }, err => reject(err));
    });
  }

  addAttendee(form) {
    return new Promise( ( resolve, reject ) => {
      this.http.post(`${cfg.apiUrl}/attendees`, form)
        .subscribe( data => {
          resolve(data);
      }, err => reject(err));
    });
  }

  updateAttendee(form) {
    return new Promise( ( resolve, reject ) => {
      this.http.patch(`${cfg.apiUrl}/attendees`, form)
        .subscribe( data => {
          resolve(data);
      }, err => reject(err));
    });
  }

  deleteAttendee(id) {
    return new Promise( ( resolve, reject ) => {
      this.http.delete(`${cfg.apiUrl}/attendees/${id}`)
        .subscribe( data => {
          resolve(data);
      }, err => reject(err));
    });
  }
}
