import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {EmpService} from '../../services/Emp.service';
import {Department} from '../../models/dept.model'
import {Employee} from '../../models/employee.model';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  departments :Department[];
  emp:Employee;

  constructor(private _router: Router,private _activatedRoute: ActivatedRoute,private _employeeService: EmpService) { }

  ngOnInit() {
    debugger;
    this.emp=new Employee();
  
    this._employeeService.getDepartments().subscribe(d => this.departments =d);
  }
  FnBackEmp() :void {
    this._router.navigate(['/Emplist']);
}

FnSaveEmp():void{
   debugger;
  
   this._employeeService.addEmployee(this.emp)
  .subscribe(suc=>{ 
    console.log('Added successfully');
   alert('New employee Added successfully');
   });
}
}
