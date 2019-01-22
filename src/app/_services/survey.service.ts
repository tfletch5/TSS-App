import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cfg } from '../config';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  
  constructor(private http: HttpClient) { }

  getSurveys() {
    return new Promise( ( resolve ) => {
      this.http.get(`${cfg.apiUrl}/surveys`)
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }

  getSurvey(id) {
    return new Promise( ( resolve ) => {
      this.http.get(`${cfg.apiUrl}/surveys/${id}`)
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }

  addSurvey(form) {
    return new Promise( ( resolve ) => {
      this.http.post(`${cfg.apiUrl}/surveys`, form)
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }

  updateSurvey(form, id) {
    return new Promise( ( resolve ) => {
      this.http.patch(`${cfg.apiUrl}/surveys/${id}`, form)
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }

  deleteSurvey(id) {
    return new Promise( ( resolve ) => {
      this.http.delete(`${cfg.apiUrl}/surveys/${id}`)
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }
}
