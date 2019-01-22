import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cfg } from '../config';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  getMembers() {
    return new Promise( ( resolve ) => {
      this.http.get(`${cfg.apiUrl}/members`)
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }

  getMember(id) {
    return new Promise( ( resolve ) => {
      this.http.get(`${cfg.apiUrl}/members/${id}`)
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }

  addMember(form) {
    return new Promise( ( resolve ) => {
      this.http.post(`${cfg.apiUrl}/members`, form)
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }

  updateMember(member) {
    return new Promise( ( resolve ) => {
      this.http.patch(`${cfg.apiUrl}/members/${member.user_id}`, { membership_id: member.membership_id })
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }

  deleteMember(id) {
    return new Promise( ( resolve ) => {
      this.http.delete(`${cfg.apiUrl}/members/${id}`)
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }
}
