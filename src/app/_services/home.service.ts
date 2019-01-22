import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cfg } from '../config';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
}
 