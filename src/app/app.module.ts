import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquarePipe } from './components/Pipes/square.pipe';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { EmployeeListComponent } from './services/employee-list/employee-list.component';
import { HttpClientModule } from "@angular/common/http";
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { DepartmentDetailsComponent } from './components/department-details/department-details.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { DepartmentOverviewComponent } from './components/department-overview/department-overview.component';
import { DepartmentContactComponent } from './components/department-contact/department-contact.component';
import { TmplDrvnFrmComponent } from './components/tmpl-drvn-frm/tmpl-drvn-frm.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DialogContentComponent } from './components/dialog-content/dialog-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SquarePipe,
    ParentComponent,
    ChildComponent,
    EmployeeListComponent,
    HomePageComponent,
    AboutPageComponent,
    NotFoundPageComponent,
    DepartmentDetailsComponent,
    DepartmentsComponent,
    DepartmentOverviewComponent,
    DepartmentContactComponent,
    TmplDrvnFrmComponent,
    ReactiveFormsComponent,
    DialogContentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  entryComponents: [DialogContentComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
