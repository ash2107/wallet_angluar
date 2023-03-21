import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/Employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-displayallemployee',
  templateUrl: './displayallemployee.component.html',
  styleUrls: ['./displayallemployee.component.css']
})
export class DisplayallemployeeComponent {
  employees: Employee[] = [];

  msg: string = "";
  errorMsg: string = "";

  constructor(private employeeService:EmployeeService){}
  //DI

  ngOnInit(): void {
      this.employees =  this.employeeService.getAllEmployees(); // load data from service to local array
  
  //   this.employeeBackEndService.getAllEmployees().subscribe(
  //     {
  //       next: (data) => {
  //         console.log(data);
  //         this.employees = data;
  //       },
  //       error: (err) => {
  //         console.log(err);

  //       },
  //       complete: () => { }
  //     }
  //   )
  // }

  // deleteEmployee(id?: number): void {
  //   console.log("Delete emp id:" + id);
  //   if (window.confirm("Do you want to delete Employee >?"))
  //     this.employeeBackEndService.deleteEmployeeById(id).subscribe(
  //       {
  //         next: (data) => { // success
  //           this.msg = "Employee Deleted Successfully . Id:" + id;
  //           this.errorMsg = "";
  //           // to filter the employee having delted id

  //           this.employees = this.employees.filter((emp) => {
  //             console.log("emp.id:" + emp.id);
  //             console.log("id:" + id);

  //             if (emp.id != id) {
  //               console.log("true :" + emp.id);
  //               return true;
  //             }

  //             else {
  //               console.log("false :" + emp.id);
  //               return false;

  //             }

  //           }
  //           );
  //           console.log(this.employees);
  //           // reload all employees
  //         },
  //         error: () => {
  //           this.errorMsg = "Employee Could not be deletd.";
  //           this.msg = "";
  //         },
  //         complete: () => { }
  //       }
  //     )

  // }

  // updateEmployee(emp: Employee) {
  //   console.log("Update emp");
  //   console.log(emp);
  //   //this.router.navigate(['details',this.name]);
  //   this.router.navigate(['update', emp.id]);
  // }
}
