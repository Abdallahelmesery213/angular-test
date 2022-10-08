import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/components/tmpl-drvn-frm/user';

@Injectable({
  providedIn: 'root'
})
export class TdfFormService {
  constructor(private http: HttpClient) { }
  url="http://localhost:3000/enroll"
  enroll(user: User){
    return this.http.post(this.url, user)
  }
}
