import {Component, OnInit} from '@angular/core';
import {Teacher} from "../model/teacher";
import {TeacherService} from "./teacher.service";

@Component({
    selector: 'app-teacher',
    templateUrl: './teacher.component.html',
    styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

    teachers: Teacher[];
    selectedTeacher: Teacher;

    constructor(private teacherService: TeacherService) {}

    getTeachers(): void {
        this.teacherService
            .getTeachers()
            .then(teachers => this.teachers = teachers);
    }

    ngOnInit() {
        this.getTeachers();
    }

    onSelect(teacher: Teacher): void {
        this.selectedTeacher = teacher;
    }
}
