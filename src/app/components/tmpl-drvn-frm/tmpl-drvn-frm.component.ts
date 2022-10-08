import { Component, OnInit } from '@angular/core';
import { TdfFormService } from 'src/app/services/tdf-form/tdf-form.service';
import { User } from './user';

@Component({
  selector: 'app-tmpl-drvn-frm',
  templateUrl: './tmpl-drvn-frm.component.html',
  styleUrls: ['./tmpl-drvn-frm.component.scss']
})
export class TmplDrvnFrmComponent implements OnInit {

  constructor(private enrollService: TdfFormService) { }

  topics= ["Angular", "React", "JavaScript"];
  userModel = new User('Abdallah', 'abdallahelmsery@gmail.com', '', 'Angular', 'evening', true)

  ngOnInit(): void {
  }
  submitData(){
    this.enrollService.enroll(this.userModel).subscribe(
      response =>{
        console.log("successful");
      },
      error =>{
        console.log(error)
      }
    )
  }

}
