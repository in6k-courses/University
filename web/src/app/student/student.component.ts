import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student'
import {StudentService} from "../services/student.service";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id.toString(),
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [StudentService]
})
export class StudentComponent implements OnInit {
  students: Student[];
  selectedStudent: Student;
  constructor(
    private router: Router,
    private studentService: StudentService) { }

  getStudents(): void {
    this.studentService
      .getStudents()
      .then(students => this.students = students);
  }

  goToDetail(): void {
    this.router.navigate(['/detail/student', this.selectedStudent.id]);
  }

  ngOnInit() {
    this.getStudents();
  }

  onSelect(student: Student): void {
    this.selectedStudent = student;
  }

}
