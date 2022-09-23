import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor() { }
  returnEmployees() {
    return [
      {"name": 'Abullah', "age":25},
      {"name": 'Saad', "age":26},
      {"name": 'Refaat', "age":24}
    ]
  }
}
