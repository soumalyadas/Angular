import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from './Login.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private myRoute: Router,private _loginService: LoginService) { }

  sendToken(token: string) {
    sessionStorage.setItem("Authtoken", token)
  }

  getToken() {
    return sessionStorage.getItem("Authtoken")
  }

 getUserName() {
    return sessionStorage.getItem("userName")
  }

   isLoggednIn() {
    return this.getToken() !== null;
  }

  HaveAccess() {
      debugger;
      if(this.getToken()==null)
      {
         return false; 
      }
      else
      {
          this._loginService.ValidateToken(sessionStorage.getItem("Authtoken").toString())
           .subscribe(suc=>{ 

            });
       
      }
  }

  logout() {
    sessionStorage.clear();
    this.myRoute.navigate(["/Login"]);
  }
}
