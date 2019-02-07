import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {LoginService} from '../../services/Login.service'
import {RegisterUser,TokenModel} from '../../models/registeruser.model'
import {FormBuilder,FormGroup,FormControl,Validators,NgForm} from '@angular/forms'  

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

signupForm:FormGroup;  


  PostData(signupForm:NgForm)  
  {  debugger;
    let frmsdata=signupForm.value;  
    let user=new RegisterUser(); 
    user.FirstName=frmsdata.fname;
    user.LastName=frmsdata.lname;
    user.Email=frmsdata.Emailid;
    user.Password=frmsdata.userpassword;

     this._loginService.Register(user)
  .subscribe(suc=>{ 
    console.log('Added successfully');
   alert('New user Added successfully');
   });
  } 

constructor(private _router: Router,private _activatedRoute: ActivatedRoute,private _loginService: LoginService,private frmbuilder:FormBuilder)
 {

  this.signupForm= frmbuilder.group({  
  fname:['',Validators.compose([Validators.required,Validators.maxLength(15),Validators.minLength(4)])],  
  lname:['',[Validators.required,Validators.maxLength(19)]],  
  Emailid:['',[Validators.required,Validators.email,]],  
  userpassword:['',[Validators.required,,Validators.minLength(5)]] ,
  confirmPassword: ['', [Validators.required, Validators.minLength(5)]],
  }, 
  {validator: this.passwordMatchValidator} 
)  
  }

passwordMatchValidator(frm: FormGroup) {
  return frm.controls['userpassword'].value === frm.controls['confirmPassword'].value ? null : {'mismatch': true};
}

  ngOnInit() {
  
 
  }

}
