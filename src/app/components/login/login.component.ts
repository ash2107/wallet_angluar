import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/Employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  employee: Employee={name:"" , password:""};
  constructor(private router:Router){}

  displayuserform(){
    console.log("displayuserform()");
    console.log(this.employee);
  }
  submitloginform(){
    console.log("submitloginform()");
    if(this.employee.name=="ford" && this.employee.password=="12345678")
    this.router.navigateByUrl("home");
  }

}
