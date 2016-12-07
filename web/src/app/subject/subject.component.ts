import {Component, OnInit} from '@angular/core';
import {SubjectService} from "../services/subject.service";
import {Subject} from "../model/subject";
import {Router} from "@angular/router";

@Component({
    selector: 'app-subject',
    templateUrl: './subject.component.html',
    styleUrls: ['./subject.component.css'],
    providers: [SubjectService]
})
export class SubjectComponent implements OnInit {
    subjects: Subject[];
    selectedSubject: Subject;
    constructor(
        private router: Router,
        private studentService: SubjectService) { }

    getSubjects(): void {
        this.studentService
            .getSubjects()
            .then(subjects => this.subjects = subjects);
    }

    goToDetail(): void {
        this.router.navigate(['/detail/subject', this.selectedSubject.id]);
    }

    ngOnInit() {
        this.getSubjects();
    }

    onSelect(subject: Subject): void {
        this.selectedSubject = subject;
    }

}
