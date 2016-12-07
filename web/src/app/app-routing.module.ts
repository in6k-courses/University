import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { StudentComponent } from "./student/student.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { StudentDetailComponent } from "./student-detail/student-detail.component";
import { SubjectComponent } from "./subject/subject.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: StudentDetailComponent },
  { path: 'students',   component: StudentComponent },
  { path: 'subjects',   component: SubjectComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
