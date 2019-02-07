import { Injectable } from '@angular/core';
import {RegisterUser,TokenModel} from '../models/registeruser.model'
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AppSettings} from '../AppSettings ';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

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
   
 Register(user:RegisterUser): Observable<boolean>  {
      debugger;
        return this.http.post<boolean>(AppSettings.API_ENDPOINT+'Hrmsportal/Register', user, this.httpOptions)
         .pipe(
            tap(_ => console.log('Register done')),
            catchError(this.handleError)
           );
     }

 ValidateUser(email:string,password:string): Observable<TokenModel>  {
      debugger;
      let user={"Email":email,"Password":password};
        return this.http.post<TokenModel>(AppSettings.API_ENDPOINT+'Hrmsportal/ValidateUser',  user, this.httpOptions)
         .pipe(
            tap(_ => console.log('authencate user')),
            catchError(this.handleError)
           );
     }

ValidateToken(token:string): Observable<boolean[]> {
   debugger;
      return this.http.get<boolean[]>(AppSettings.API_ENDPOINT+'Hrmsportal/ValidateToken/?token='+token,this.httpOptions)
    .pipe(
      tap(_ => console.log('correct token')),
      catchError(this.handleError)
    );
    }
}
