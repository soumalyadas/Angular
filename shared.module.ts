import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CustomMaterialModule } from './material.module';
import { CustomServiceModule } from './service.module';

import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';

import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 

import { AddEmpComponent } from './components/add-emp/add-emp.component';
import { EditEmpComponent } from './components/edit-emp/edit-emp.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
 imports:[AppRoutingModule,CustomMaterialModule,FormsModule,ReactiveFormsModule,CommonModule,BrowserAnimationsModule,HttpClientModule],
 declarations: [LoginComponent,RegistrationComponent,EmpListComponent, AddEmpComponent, EditEmpComponent, PageNotFoundComponent],
 exports:  [AppRoutingModule,CustomMaterialModule]
})
export class SharedModule  { }
