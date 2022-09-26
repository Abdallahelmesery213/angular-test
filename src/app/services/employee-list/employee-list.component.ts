import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService: EmployeeService) {}
  employeeList: any;
  errorMessage: any;

  ngOnInit(): void {
    // this.employeeList = this.employeeService.returnEmployees();
    this.employeeService.returnEmployees().subscribe(
      data => {
        this.employeeList = data;
      },
      error => {
        this.errorMessage = error;
      }
    )
  }

}
