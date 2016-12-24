import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { StudentComponent } from "./student/student.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SubjectComponent } from "./subject/subject.component";
import {TeacherComponent} from "./teacher/teacher.component";
import {NotFoundComponent} from "./not-found-component/not-found.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'students',   component: StudentComponent },
  { path: 'subjects',   component: SubjectComponent },
  { path: 'teachers',   component: TeacherComponent },
  { path: '404',        component: NotFoundComponent},
  { path: '**',         redirectTo: '/404', pathMatch: 'full' }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
