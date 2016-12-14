import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app/app.component';
import { StudentComponent } from './student/student.component';
import { StudentService } from "./student/student.service";
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from "./app-routing.module";
import { SubjectService } from "./subject/subject.service";
import { SubjectComponent } from './subject/subject.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { TeacherService } from "./teacher/teacher.service";

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    DashboardComponent,
    SubjectComponent,
    TeacherComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [StudentService, SubjectService, TeacherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
