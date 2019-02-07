
import { NgModule } from '@angular/core';
import {EmpService} from './services/Emp.service'
import {LoginService} from './services/Login.service'
import {AuthService} from './services/Auth.service'
import { AuthGuard } from './auth.guard';

@NgModule({
  providers:[EmpService,LoginService,AuthService,AuthGuard]
})
export class CustomServiceModule { }
