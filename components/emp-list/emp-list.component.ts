import { Component, OnInit } from '@angular/core';
import {Employee} from '../../models/employee.model';
import {EmpService} from '../../services/Emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
 
  employees: Employee[];
  Inactivechecked:boolean = false;
  selectedEmployee:string = 'Not All';
  constructor(private _router: Router,private _employeeService: EmpService) 
   {
  //  debugger;
   }

  ngOnInit() {
  //  debugger;
  this._employeeService.getEmployees().subscribe(e => this.employees = e);

  }

onChange(event) {
if(this.Inactivechecked==true)
{
this.selectedEmployee='All';
}
else{
this.selectedEmployee='Not All';
}  
    }

    
FnCreateEmp() :void {
    this._router.navigate(['/AddEmp']);
} 
}
