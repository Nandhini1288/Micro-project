import { Component } from '@angular/core';
import { Employee } from './model/Employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EMS';
  employee:Employee;
  result:string;
  employeeArr:Employee[];
  flag:boolean;

  constructor(private service:EmployeeService){
    this.employee=new Employee();
    this.result="";
    this.employeeArr=[];
    this.flag=false;
  }

  insertEmployee(data:any){
    this.employee.id=data.id;
    this.employee.empName=data.empName;
    this.employee.empSalary=data.empSalary;
   // this.service.insertEmployee(this.employee);
    this.result=this.service.insertEmployee(this.employee);
    //alert(data.id+" "+data.empName+" "+data.empSalary); 
  }
  updateEmployee(data:any){
    this.employee.id=data.id;
    this.employee.empName=data.empName;
    this.employee.empSalary=data.empSalary;
    this.result=this.service.updateEmployee(this.employee);
}
deleteEmployee(data:any){
  this.result=this.service.deleteEmployee(data.id);
}
findEmployee(data:any){
  this.employee=this.service.findEmployee(data.id);
  this.result=this.employee.id+" "+this.employee.empName+" "+this.employee.empSalary;
}
findAllEmployee(){
  this.employeeArr=this.service.findAllEmployee();
  this.flag=true;
}
}