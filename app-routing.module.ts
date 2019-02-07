import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { AddEmpComponent } from './components/add-emp/add-emp.component';
import { EditEmpComponent } from './components/edit-emp/edit-emp.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Registration', component: RegistrationComponent },
  { path: 'Emplist', component: EmpListComponent , canActivate: [AuthGuard]},
  { path: 'AddEmp', component: AddEmpComponent , canActivate: [AuthGuard]},
  { path: 'EditEmp/:code', component: EditEmpComponent , canActivate: [AuthGuard] },
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
 imports: [ RouterModule.forRoot(routes) ],
 exports: [ RouterModule ]
})
export class AppRoutingModule { }
