import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoadPaymentsComponent} from "./load-payments/load-payments.component";
import {LoadStudentsComponent} from "./load-students/load-students.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import {StudentsComponent} from "./students/students.component";
import {PaymentsComponent} from "./payments/payments.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {AuthGuard} from "./gaurds/auth.guard";
import {AuthorizationGuard} from "./gaurds/authorization.guard";
import {StudentDetailsComponent} from "./student-details/student-details.component";
import {NewPeymentComponent} from "./new-peyment/new-peyment.component";

export const routes: Routes = [
  {path:"", component: LoginComponent},
  {path:"login", component: LoginComponent},
  {path:"admin", component: AdminTemplateComponent, canActivate:[AuthGuard ],

    children: [
      {path:"home", component: HomeComponent},
      {path:"profile", component: ProfileComponent},
      {
        path:"load-students", component: LoadStudentsComponent
        ,canActivate :[AuthorizationGuard], data: {roles :['ADMIN']}
      },
      {
        path:"load-payments", component: LoadPaymentsComponent
        ,canActivate :[AuthorizationGuard], data: {roles :['ADMIN']}
      },
      {path:"dashboard", component: DashboardComponent},
      {path:"students", component: StudentsComponent},
      {path:"payments", component: PaymentsComponent},
      {path:"student-detail/:code", component: StudentDetailsComponent},
      {path:"new-payment/:code", component: NewPeymentComponent},
    ]},

];
