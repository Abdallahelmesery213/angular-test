import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  spinner = false;
  loadData(){
    this.spinner = true;
    setTimeout(()=> {
      this.spinner = false;
    },5000)
  }
  opend: boolean = false;
}
