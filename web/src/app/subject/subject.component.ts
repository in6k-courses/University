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
    show: boolean;
    addButtonText: string;

    constructor(private subjectService: SubjectService) { }

    getSubjects(): void {
        this.subjectService
            .getSubjects()
            .then(subjects => this.subjects = subjects);
    }

    ngOnInit() {
        this.show = true;
        this.addButtonText = "Add subject";
        this.getSubjects();
    }

    onSelect(subject: Subject): void {
        this.selectedSubject = subject;
    }

    delete(subject: Subject): void {
        this.subjectService
            .delete(subject.id)
            .then(() => {
                this.subjects = this.subjects.filter(h => h !== subject);
                if (this.selectedSubject === subject) { this.selectedSubject = null; }
            });
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.subjectService.create(name)
            .then(subject => {
                this.subjects.push(subject);
                this.selectedSubject = null;
            });
    }

    showAddForm(): void {
        this.show = !this.show;
        if (this.show) this.addButtonText = "Add subject";
        else this.addButtonText = "Hide form";
    }
}
