import { Injectable } from '@angular/core';
import {Employee} from '../models/employee.model'
import {Department} from '../models/dept.model'
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AppSettings} from '../AppSettings ';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  httpOptions = {};

    constructor(private http: HttpClient) {
       
         this.httpOptions = {
                    headers: new HttpHeaders({
                            'Content-Type':  'application/json',
                            'Authorization': 'my-auth-token'
                                            })
                             }
    }


  handleError(er: any) {
    debugger;
        console.log('Error is:'+er.message);
        return Observable.throw(er);
    }
   
   getEmployees (): Observable<Employee[]> {
  return this.http.get<Employee[]>(AppSettings.API_ENDPOINT+'Hrmsportal/getEmployees',this.httpOptions)
    .pipe(
      tap(_ => console.log('fetched employees list')),
      catchError(this.handleError)
    );
   }

    getEmployeeById (id:number): Observable<Employee> {
    return this.http.get<Employee>(AppSettings.API_ENDPOINT+'Hrmsportal/getEmployeeById/'+id,this.httpOptions)
        .pipe(
        tap(_ => console.log('fetched Emp code :'+id+' employee')),
        catchError(this.handleError)
        );
    }

     getDepartments(): Observable<Department[]> {
      return this.http.get<Department[]>(AppSettings.API_ENDPOINT+'Hrmsportal/getDepartments',this.httpOptions)
    .pipe(
      tap(_ => console.log('fetched department list')),
      catchError(this.handleError)
    );
    }

    updateEmployee(emp:Employee): Observable<boolean>  {
      debugger;
        return this.http.post<boolean>(AppSettings.API_ENDPOINT+'Hrmsportal/updateEmployee', emp, this.httpOptions)
         .pipe(
            tap(_ => console.log('update done')),
            catchError(this.handleError)
           );
     }

addEmployee(emp:Employee): Observable<boolean>  {
      debugger;
        return this.http.post<boolean>(AppSettings.API_ENDPOINT+'Hrmsportal/addEmployee', emp, this.httpOptions)
         .pipe(
            tap(_ => console.log('added done')),
            catchError(this.handleError)
           );
     }
     

}
