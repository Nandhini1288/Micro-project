import { Injectable } from '@angular/core';
import { Employee } from './model/Employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'

})
export class EmployeeService {
  url:string;
  employee:Employee;
  employeeArr:Employee[];


  constructor(private http:HttpClient) { 
    this.url="http://localhost:3004/employee";
    this.employee=new Employee();
    this.employeeArr=[];
  }

  insertEmployee(employee:Employee){
    //this.http.post("http://localhost:3004/",employee).subscribe();
    this.http.post<Employee>(this.url,employee).subscribe();
    return "Employee Details Added";
  }
  updateEmployee(employee:Employee){
    this.http.put<Employee>(this.url+"/"+employee.id,employee).subscribe();
    return "Employee Details Updated";
  }
  deleteEmployee(id:number){
    this.http.delete<Employee>(this.url+"/"+id).subscribe();
    return "Employee Details Deleted";
  }
  findEmployee(id:number){
    this.http.get<Employee>(this.url+"/"+id).subscribe(data=> this.employee=data);
    return this.employee;
  }
  findAllEmployee(){
    this.http.get<Employee[]>(this.url).subscribe(data=>this.employeeArr=data);
    return this.employeeArr;
  }
}