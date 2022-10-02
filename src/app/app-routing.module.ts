import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { DepartmentContactComponent } from './components/department-contact/department-contact.component';
import { DepartmentDetailsComponent } from './components/department-details/department-details.component';
import { DepartmentOverviewComponent } from './components/department-overview/department-overview.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [
  {path:"", redirectTo: "/home", pathMatch: "full" },
  {path:"home", component: HomePageComponent},
  {path: "about", component: AboutPageComponent},
  {path: "departments", component: DepartmentsComponent},
  {path: "department/:id", component: DepartmentDetailsComponent,
    children:[
      {path: "overview", component: DepartmentOverviewComponent},
      {path: "contact", component: DepartmentContactComponent}
    ]
  },
  {path: "about", component: AboutPageComponent},
  {path: "**", component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
