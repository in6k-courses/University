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
    show:boolean;
    addButtonText:string;

    constructor(private teacherService: TeacherService) {}

    getTeachers(): void {
        this.teacherService
            .getTeachers()
            .then(teachers => this.teachers = teachers);
    }

    ngOnInit() {
        this.show = true;
        this.addButtonText = "Add teacher";
        this.getTeachers();
    }

    onSelect(teacher: Teacher): void {
        this.selectedTeacher = teacher;
    }

    delete(teacher: Teacher): void {
        this.teacherService
            .delete(teacher.id)
            .then(() => {
                this.teachers = this.teachers.filter(t => t !== teacher);
                if (this.selectedTeacher === teacher) { this.selectedTeacher = null; }
            });
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.teacherService.create(name)
            .then(subject => {
                this.teachers.push(subject);
                this.selectedTeacher = null;
            });
    }

    showAddForm(): void {
        this.show = !this.show;
        if (this.show) this.addButtonText = "Add teacher";
        else this.addButtonText = "Hide form";
    }
}
