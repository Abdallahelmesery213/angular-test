import { AbstractControl, FormControl } from '@angular/forms';
// custom Validators => functions
// AbstractControl include FormGroup and FormControl

export function forbiddenNameValidtor(contol: AbstractControl){
  const forbidden = /admin/.test(contol.value);
  return forbidden ? {'ForbiddenName': {value: contol.value}} : null
}

