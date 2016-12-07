import { Component, OnInit } from '@angular/core';
import {Teacher} from "../model/teacher";
import {Router} from "@angular/router";
import {TeacherService} from "../services/teacher.service";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teachers: Teacher[];
  selectedTeacher: Teacher;
  constructor(
      private router: Router,
      private teacherService: TeacherService) { }

  getTeachers(): void {
    this.teacherService
        .getTeachers()
        .then(teachers => this.teachers = teachers);
  }

  goToDetail(): void {
    this.router.navigate(['/detail/teacher', this.selectedTeacher.id]);
  }

  ngOnInit() {
    this.getTeachers();
  }

  onSelect(teacher: Teacher): void {
    this.selectedTeacher = teacher;
  }

}
