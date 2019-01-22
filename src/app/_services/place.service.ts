import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cfg } from '../config';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) { }

  getPlaces() {
    return new Promise( ( resolve ) => {
      this.http.get(`${cfg.apiUrl}/places`)
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }

  getPlace(id) {
    return new Promise( ( resolve ) => {
      this.http.get(`${cfg.apiUrl}/places/${id}`)
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }

  addPlace(form) {
    return new Promise( ( resolve ) => {
      this.http.post(`${cfg.apiUrl}/places`, form)
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }

  updatePlace(form, id) {
    return new Promise( ( resolve ) => {
      this.http.patch(`${cfg.apiUrl}/places/${id}`, form)
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }

  deletePlace(id) {
    return new Promise( ( resolve ) => {
      this.http.delete(`${cfg.apiUrl}/places/${id}`)
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }
}
