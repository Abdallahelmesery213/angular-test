import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquarePipe } from './components/Pipes/square.pipe';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { EmployeeDetailsComponent } from './services/employee-details/employee-details.component';
import { EmployeeListComponent } from './services/employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SquarePipe,
    ParentComponent,
    ChildComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
