import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app/app.component';
import { StudentComponent } from './student/student.component';
import { StudentService } from "./services/student.service";
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { AppRoutingModule } from "./app-routing.module";
import {SubjectService} from "./services/subject.service";
import { SubjectComponent } from './subject/subject.component';
import { TeacherComponent } from './teacher/teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    DashboardComponent,
    StudentDetailComponent,
    SubjectComponent,
    TeacherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [StudentService, SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
