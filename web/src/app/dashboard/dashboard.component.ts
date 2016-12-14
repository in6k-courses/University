import { Component, OnInit } from '@angular/core';
import { Teacher } from "../model/teacher";
import { TeacherService } from "../teacher/teacher.service";

@Component({
  moduleId: module.id.toString(),
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  teachers: Teacher [] = [];
  constructor(private teacherService : TeacherService) {}

  ngOnInit() {
    this.teacherService.getTeachers()
      .then(teachers => this.teachers = teachers.slice(1,5));
  }
}
