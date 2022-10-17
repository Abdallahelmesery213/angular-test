import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { confirmPassValid } from 'src/app/Validators/confirmPass';
import { forbiddenNameValidtor } from 'src/app/Validators/ForbiddenName';

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
    userName: ['', [Validators.required, Validators.minLength(4), forbiddenNameValidtor]],
    password: [''],
    confirmPass: [''],
    email:[''],
    subscribe:[false],
    addressFormGrp: this.fb.group({
      city: [''],
      street: [''],
      postalCode: ['']
    })
  }, {validator: [confirmPassValid]})
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

  setEmailValidator(){
    this.registerationForm.get('subscribe')?.valueChanges.subscribe(checkedValue => {
      const email = this.registerationForm.get('email');
      if (checkedValue){
        email?.setValidators(Validators.required)
      }
      else {
        email?.clearValidators()
      }
      email?.updateValueAndValidity()
    })
  }

  ngOnInit(): void {
  }

}
