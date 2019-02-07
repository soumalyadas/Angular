import { Component, OnInit } from '@angular/core';
import {AppSettings} from './AppSettings ';
import {AuthService} from './services/Auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() 
  {
   
  }
}

