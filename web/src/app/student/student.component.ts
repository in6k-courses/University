import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student'
import { StudentService } from "./student.service";
import { Router } from "@angular/router";

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

    show:boolean;
    addButtonText:string;

  constructor(
    private router: Router,
    private studentService: StudentService) { }

  getStudents(): void {
    this.studentService
      .getStudents()
      .then(students => this.students = students);
  }

  goToDetail(): void {
    this.router.navigate(['/students/details', this.selectedStudent.id]);
  }

  ngOnInit() {
      this.show = true;
      this.addButtonText = "Add student";
      this.getStudents();
  }

  onSelect(student: Student): void {
    this.selectedStudent = student;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.studentService.create(name)
        .then(student => {
          this.students.push(student);
          this.selectedStudent = null;
        });
  }

    delete(student: Student): void {
        this.studentService
            .delete(student.id)
            .then(() => {
                this.students = this.students.filter(h => h !== student);
                if (this.selectedStudent === student) { this.selectedStudent = null; }
            });
    }

    showAddForm(): void {
        this.show = !this.show;
        if (this.show) this.addButtonText = "Add student";
        else this.addButtonText = "Hide form";
    }
}
