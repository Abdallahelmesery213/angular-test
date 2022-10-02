import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  departments: any = [
    {"id": 1 , "name": "Angular"},
    {"id": 2 , "name": "NodeJs"},
    {"id": 3 , "name": "React"},
    {"id": 4 , "name": "VueJS"},
  ]
  goToDepDetails(department:any){
    this.router.navigate(["/department", department.id]);
  }

  depId:any = 0;
  // dept:any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.depId = params.get("id");
    })
  }
  // isSelected(dept:any){
  //   return parseInt(dept.id) === parseInt(this.depId);
  // }

}
