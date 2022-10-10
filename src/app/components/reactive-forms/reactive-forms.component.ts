import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  constructor() { }

  registerationForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
    confirmPass: new FormControl(''),
    addressFormGrp: new FormGroup({
      city: new FormControl(''),
      street: new FormControl(''),
      postalCode: new FormControl('')
    })
  })

  ngOnInit(): void {
  }

}
