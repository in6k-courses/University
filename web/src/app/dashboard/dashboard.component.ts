import { Component, OnInit } from '@angular/core';
import {Student} from "../model/student";
import {StudentService} from "../student.service";

@Component({
  moduleId: module.id.toString(),
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  students: Student [] = [];
  constructor(private studentService : StudentService) {}

  ngOnInit() {
    this.studentService.getStudents()
      .then(students => this.students = students.slice(1,5));
  }

}
