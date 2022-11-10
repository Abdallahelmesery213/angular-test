import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private snackBar: MatSnackBar){}
  title = 'my-app';
  spinner = false;
  loadData(){
    this.spinner = true;
    setTimeout(()=> {
      this.spinner = false;
    },5000)
  }
  opend: boolean = false;
  selectedValue: string = '';
  autoCompOptions: string[] = ["Angular", "React", "Vue"];
  autoObject = [
    {name: "angular"},
    {name: "react"},
    {name: "vue"}
  ]
  filterSatSunDay(date:any){
    const day = date.getDay();
    return day !=0 && day!=6
  }
  openSnackbar(msg: string, action:string){
    this.snackBar.open(msg, action, {duration:2000});
  }
}
