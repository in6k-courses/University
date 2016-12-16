import {Component, OnInit} from '@angular/core';
import {Student} from '../model/student'
import {StudentService} from "./student.service";
import {Router} from "@angular/router";
import {SchoolSubject} from "../model/subject";
import {SubjectService} from "../subject/subject.service";

@Component({
    moduleId: module.id.toString(),
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
    students: Student[];
    subjects: SchoolSubject[];
    selectedStudent: Student;

    show: boolean;
    addButtonText: string;

    constructor(private router: Router,
                private subjectService: SubjectService,
                private studentService: StudentService) {
    }

    getStudents(): void {
        this.studentService
            .getStudents()
            .then(students => this.students = students);
    }

    getSubjects(): void {
        this.subjectService
            .getSubjects()
            .then(subjects => this.subjects = subjects);
    }

    goToDetail(): void {
        this.router.navigate(['/students/details', this.selectedStudent.id]);
    }

    ngOnInit() {
        this.show = true;
        this.addButtonText = "Add student";
        this.getStudents();
        this.getSubjects();
    }

    onSelect(student: Student): void {
        this.selectedStudent = student;
    }

    add(name: string): void {
        this.studentService.create(name)
            .then(student => {
                this.students.push(student);
                this.selectedStudent = null;
            });
    }

    save(student: Student): void {
        this.studentService.update(student);
        this.selectedStudent = null;
    }

    delete(student: Student): void {
        this.studentService
            .delete(student.id)
            .then(() => {
                this.students = this.students.filter(s => s !== student);
                if (this.selectedStudent === student) {
                    this.selectedStudent = null;
                }
            });
    }

    showAddForm(): void {
        this.show = !this.show;
        if (this.show) this.addButtonText = "Add student";
        else this.addButtonText = "Hide form";
    }
}
