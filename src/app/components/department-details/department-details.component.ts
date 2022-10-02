import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.scss']
})
export class DepartmentDetailsComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private router: Router) { }
  depId: any;
  ngOnInit(): void {
    // this.depId = this.activateRoute.snapshot.paramMap.get("id");
    this.activateRoute.paramMap.subscribe((params)=>{
      this.depId = params.get("id");
    })
  }
  goPrev(){
    let prevId = this.depId - 1;
    this.router.navigate(["/department", prevId]);
  }
  goNext(){
    let nextId = parseInt(this.depId) +1;
    this.router.navigate(["department", nextId]);
  }
  goToDepts(){
    this.router.navigate(["departments", {id: this.depId}]) // optional parameter
  }

  goToOverview(){
    this.router.navigate(["overview"], {relativeTo: this.activateRoute})
  }
  goToContact(){
    this.router.navigate(["contact"], {relativeTo: this.activateRoute})
  }

}
