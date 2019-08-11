import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AuthenticationApi} from './api/authentication.api'
import { BehaviorSubject } from 'rxjs';
import { Helper } from './helper';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {

   }

   Register(user:any){
    return this.http.post(AuthenticationApi.REGISTER, user);
   }

   Login(user:any){
    return this.http.post(AuthenticationApi.LOGIN, user);
   }

   Me(){
     return this.http.get(AuthenticationApi.ME, { headers: Helper.SetHeaderAuth() });
   }

   GetUser(){
     return this.http.get(AuthenticationApi.GET, { headers: Helper.SetHeaderAuth() })
   }

   verify(id : string){
     return this.http.get(`${AuthenticationApi.VERIFY}/${id}`);
   }
   
   forgotPassword(email : any){
     return this.http.post(AuthenticationApi.FORGOTPASSWORD, {email : email});
   }
}
