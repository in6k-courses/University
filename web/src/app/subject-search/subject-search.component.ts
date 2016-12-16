import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {SchoolSubject} from "../model/subject";
import {SubjectSearchService} from "./subject-search.service";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id.toString(),
    selector: 'app-subject-search',
    templateUrl: './subject-search.component.html',
    styleUrls: ['./subject-search.component.css']
})
export class SubjectSearchComponent implements OnInit {
    subjects: Observable<SchoolSubject[]>;
    private searchTerms = new Subject<string>();

    constructor(private subjectSearchService: SubjectSearchService,
                private router: Router) { }

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.subjects = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term ? this.subjectSearchService.search(term) : Observable.of<SchoolSubject[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<SchoolSubject>();
            });
    }

    gotoDetail(subject: SchoolSubject): void {
        let link = ['/detail', subject.id];
        this.router.navigate(link);
    }


}
