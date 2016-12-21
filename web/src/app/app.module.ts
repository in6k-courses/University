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
import { TeacherService } from "./teacher/teacher.service";
import { SubjectSearchComponent } from './subject-search/subject-search.component';
import { SubjectSearchService } from "./subject-search/subject-search.service";
import { AddFormComponent } from './add-form/add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    DashboardComponent,
    SubjectComponent,
    TeacherComponent,
    SubjectSearchComponent,
    AddFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [StudentService, SubjectService, TeacherService, SubjectSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
