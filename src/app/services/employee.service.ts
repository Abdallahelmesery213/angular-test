import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable , throwError} from 'rxjs';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) { }
  private _url: string ="/assets/Data/employee.json";
  returnEmployees():Observable<IEmployee[]> {
    // return [
    //   {"name": 'Abullah', "age":25},
    //   {"name": 'Saad', "age":26},
    //   {"name": 'Refaat', "age":24}
    // ]
    return this.http.get<IEmployee[]>(this._url).pipe(catchError((err) =>
    {
      return throwError(err.message || "server error");
    }));
  }
}
