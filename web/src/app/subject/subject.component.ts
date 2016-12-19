import {Component, OnInit} from '@angular/core';
import {SubjectService} from "./subject.service";
import {SchoolSubject} from "../model/subject";

@Component({
    selector: 'app-subject',
    templateUrl: './subject.component.html',
    styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
    subjects: SchoolSubject[];
    selectedSubject: SchoolSubject;
    show: boolean;
    addButtonText: string;

    constructor(private subjectService: SubjectService) { }

    getSubjects(): void {
        this.subjectService
            .getSubjects()
            .subscribe(subjects => this.subjects = subjects);
    }

    ngOnInit() {
        this.show = true;
        this.addButtonText = "Add subject";
        this.getSubjects();
    }

    onSelect(subject: SchoolSubject): void {
        this.selectedSubject = subject;
    }

    delete(subject: SchoolSubject): void {
        this.subjectService
            .delete(subject.id)
            .subscribe(() => {
                this.subjects = this.subjects.filter(h => h !== subject);
                if (this.selectedSubject === subject) { this.selectedSubject = null; }
            });
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.subjectService.create(name)
            .subscribe(subject => {
                this.subjects.push(subject);
                this.selectedSubject = null;
            });
    }

    save(subject: SchoolSubject): void {
        this.subjectService.update(subject)
        this.selectedSubject = null;
    }

    showAddForm(): void {
        this.show = !this.show;
        if (this.show) this.addButtonText = "Add subject";
        else this.addButtonText = "Hide form";
    }
}
