import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cfg } from '../config';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  getLocations() {
    return new Promise( ( resolve ) => {
      this.http.get(`${cfg.apiUrl}/locations`)
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }

  getLocation(id) {
    return new Promise( ( resolve ) => {
      this.http.get(`${cfg.apiUrl}/locations/${id}`)
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }

  addLocation(form) {
    return new Promise( ( resolve ) => {
      this.http.post(`${cfg.apiUrl}/locations`, form)
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }

  updateLocation(form, id) {
    return new Promise( ( resolve ) => {
      this.http.patch(`${cfg.apiUrl}/locations/${id}`, form)
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }

  deleteLocation(id) {
    return new Promise( ( resolve ) => {
      this.http.delete(`${cfg.apiUrl}/locations/${id}`)
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }

  getPlacesByLocation(id) {
    return new Promise( ( resolve ) => {
      this.http.get(`${cfg.apiUrl}/locations/${id}/places`)
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }

  getEventsByLocation(id, user) {
    return new Promise( ( resolve ) => {
      this.http.get(`${cfg.apiUrl}/locations/${id}/events/${user}`)
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }
}
