import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  // registerationForm = new FormGroup({
  //   userName: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPass: new FormControl(''),
  //   addressFormGrp: new FormGroup({
  //     city: new FormControl(''),
  //     street: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // })

  registerationForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(5)]],
    password: [''],
    confirmPass: [''],
    addressFormGrp: this.fb.group({
      city: [''],
      street: [''],
      postalCode: ['']
    })
  })
  // method to less save code in html
  getUserName(){
    return this.registerationForm.get('userName')
  }



  loadData(){
    this.registerationForm.setValue({
      userName: 'Abdullah',
      password: '123',
      confirmPass: '123',
      addressFormGrp:{
        city: 'Elmahalla Elkubra',
        street: 'Abo Ali',
        postalCode: '123'
      }
    })
  }
  // patchValue in case I want skip set control
  // loadData(){
  //   this.registerationForm.patchValue({
  //     userName: 'Abdullah',
  //     // password: '123',
  //     // confirmPass: '123',
  //     addressFormGrp:{
  //       city: 'Elmahalla Elkubra',
  //       street: 'Abo Ali',
  //       postalCode: '123'
  //     }
  //   })
  // }

  ngOnInit(): void {
  }

}
