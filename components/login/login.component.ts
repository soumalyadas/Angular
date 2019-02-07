import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {LoginService} from '../../services/Login.service'
import {RegisterUser,TokenModel} from '../../models/registeruser.model'
import {AppSettings} from '../../AppSettings ';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

Email:string;
Password:string;
  constructor(private _router: Router,private _activatedRoute: ActivatedRoute,private _loginService: LoginService) { }


  ngOnInit() {
  }

FnLogin():void{
   this._loginService.ValidateUser(this.Email,this.Password)
  .subscribe(suc=>{ 
    debugger;
    if(suc!=null)
    {
    console.log('loged in successfully');
      sessionStorage.setItem("userName", suc.Username);
      sessionStorage.setItem("userId", suc.LoginId.toString());
      sessionStorage.setItem("Authtoken", suc.APIKey);
      
       this._router.navigate(['/Emplist']);
     // window.location.href = "/Emplist";
    }
    else{
      this.Email=null;
      this.Password=null;
    alert('worng userid or password');
   }
   });
}

}
