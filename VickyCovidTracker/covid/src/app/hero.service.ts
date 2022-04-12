import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vignesh } from './vignesh.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }
  readonly baseURL="http://localhost:3000/store";
  readonly URL="http://localhost:3000/find";
  st(w:Vignesh){
   return this.http.post(this.baseURL,w);
  }
  ut(x:Vignesh){
    return this.http.post(this.URL,x);
   }

}
