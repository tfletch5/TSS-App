import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cfg } from './../config';

@Injectable({
  providedIn: 'root'
})
export class AmbassadorService {

  constructor(private http: HttpClient) { }

  getAmbassadors() {
    return new Promise( ( resolve ) => {
      this.http.get(`${cfg.apiUrl}/ambassadors`)
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }

  getAmbassador(id) {
    return new Promise( ( resolve ) => {
      this.http.get(`${cfg.apiUrl}/ambassadors/${id}`)
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }

  addAmbassador(form) {
    return new Promise( ( resolve ) => {
      this.http.post(`${cfg.apiUrl}/ambassadors`, form)
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }

  updateAmbassador(form, id) {
    return new Promise( ( resolve ) => {
      this.http.patch(`${cfg.apiUrl}/ambassadors/${id}`, form)
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }

  deleteAmbassador(id) {
    return new Promise( ( resolve ) => {
      this.http.delete(`${cfg.apiUrl}/ambassadors/${id}`)
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }
}
