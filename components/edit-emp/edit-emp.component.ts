import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {EmpService} from '../../services/Emp.service';
import {Department} from '../../models/dept.model'
import {Employee} from '../../models/employee.model';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {

empid:number;
departments :Department[];
employee: Employee;

  constructor(private _router: Router,private _activatedRoute: ActivatedRoute,private _employeeService: EmpService) { }

  ngOnInit() {
   // debugger;
      this.empid=this._activatedRoute.snapshot.params['code'];

      this._employeeService.getEmployeeById(Number(this.empid)).subscribe(
        suc => {
           console.log('success/next');
           this.employee = suc;
        },
        err => {
            console.log('error:'+err );
        },
         () => {
           if(this.employee!=null)
           {
             console.log('after emp call complete and emp is not null/valid empid');
             this._employeeService.getDepartments().subscribe(d => this.departments =d);
           }
           
        }
      ); 
  }


FnBackEmp() :void {
    this._router.navigate(['/Emplist']);
} 

FnSaveEmp():void{
   debugger;
   if(this.employee.contactPreference==1)
   {
     this.employee.phn="";
   }
   else
   {
     this.employee.email="";
   }
   
   this._employeeService.updateEmployee(this.employee)
  .subscribe(suc=>{ 
    console.log('Updated successfully');
   alert('Updated successfully');
   });
}
 
}
