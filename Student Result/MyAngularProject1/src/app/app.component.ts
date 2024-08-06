import { Component } from '@angular/core';
import { Student} from './model1/Student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Student Result Management System';
  student:Student;
  result:string;
  studentArr:Student[];
  flag:boolean;

  constructor(private service:StudentService){
    this.student=new Student();
    this.result="";
    this.studentArr=[];
    this.flag=false;
  }

  insertStudent(data:any){
    this.student.id=data.id;
    this.student.studentName=data.studentName;
    this.student.studentGrade=data.studentGrade;
   // this.service.insertEmployee(this.employee);
    this.result=this.service.insertStudent(this.student);
    //alert(data.id+" "+data.empName+" "+data.empSalary); 
  }
  updateStudent(data:any){
    this.student.id=data.id;
    this.student.studentName=data.studentName;
    this.student.studentGrade=data.studentGrade;
    this.result=this.service.updateStudent(this.student);
}
deleteStudent(data:any){
  this.result=this.service.deleteStudent(data.id);
}
findStudent(data:any){
  this.student=this.service.findStudent(data.id);
  this.result=this.student.id+" "+this.student.studentName+" "+this.student.studentGrade;
}
findAllStudent(){
  this.studentArr=this.service.findAllStudent();
  this.flag=true;
}
}