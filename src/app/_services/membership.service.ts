import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cfg } from '../config';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  constructor(private http: HttpClient) { }

  getMemberships() {
    return new Promise( ( resolve ) => {
      this.http.get(`${cfg.apiUrl}/memberships`)
        .subscribe( data => {
          resolve(data);
      }, err => resolve(err.error));
    });
  }

  getMembership(id) {
    return new Promise( ( resolve ) => {
      this.http.get(`${cfg.apiUrl}/memberships/${id}`)
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }

  addMembership(form) {
    return new Promise( ( resolve ) => {
      this.http.post(`${cfg.apiUrl}/stripe/products`, { 
        name: form.name, 
        type: 'service', 
        statement_descriptor: `TSS - ${form.name}`,
        metadata: { 
          cost: form.cost,
          frequency: form.frequency
        }
      }).subscribe( data => {
          var prod = data['data'];
          this.http.post(`${cfg.apiUrl}/stripe/plans`, {
            product: prod.id,
            nickname: prod.name,
            currency: 'usd',
            interval: prod.metadata.frequency,
            amount: prod.metadata.cost,
          }).subscribe( data => {
            var plan = data['data'];
            form.product_id = plan.product;
            form.plan_id = plan.id;
            this.http.post(`${cfg.apiUrl}/memberships`, form)
              .subscribe( data => {
                  resolve(data);
              }, err => resolve(err.error));
          }, err => resolve(err.error));
      }, err => resolve(err.error));
    });
  }

  updateMembership(form, id) {
    return new Promise( ( resolve ) => {
      this.http.patch(`${cfg.apiUrl}/memberships/${id}`, form)
        .subscribe( data => {
          resolve(data);
      }, err => console.log(err));
    });
  }

  deleteMembership(id, product, plan) {
    return new Promise( ( resolve ) => {
      this.http.delete(`${cfg.apiUrl}/stripe/plans/${plan}`).subscribe( data => {
        console.log("Delete Plan: ", data['data']);
        this.http.delete(`${cfg.apiUrl}/stripe/products/${product}`).subscribe( data => {
          console.log("Delete Product: ", data['data']);
          this.http.delete(`${cfg.apiUrl}/memberships/${id}`)
            .subscribe( data => {
              resolve(data);
          }, err => resolve(err.error));
        }, err => resolve(err.error));
      }, err => resolve(err.error));
    });
  }

  changeMembership( membership ) {
    return new Promise( ( resolve ) => {
      this.http.patch(`${cfg.apiUrl}/stripe/subscriptions/${membership.current_subscription}`, membership)
        .subscribe( data => {
          resolve(data);
      }, err => console.log('Change Membership:' , err));
    });
  }
}
