import {Component, OnInit} from '@angular/core';
import {SubjectService} from "./subject.service";
import {Subject} from "../model/subject";

@Component({
    selector: 'app-subject',
    templateUrl: './subject.component.html',
    styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
    subjects: Subject[];
    selectedSubject: Subject;
    constructor(private studentService: SubjectService) { }

    getSubjects(): void {
        this.studentService
            .getSubjects()
            .then(subjects => this.subjects = subjects);
    }

    ngOnInit() {
        this.getSubjects();
    }

    onSelect(subject: Subject): void {
        this.selectedSubject = subject;
    }

    delete(subject: Subject): void {
        this.studentService
            .delete(subject.id)
            .then(() => {
                this.subjects = this.subjects.filter(h => h !== subject);
                if (this.selectedSubject === subject) { this.selectedSubject = null; }
            });
    }
}
