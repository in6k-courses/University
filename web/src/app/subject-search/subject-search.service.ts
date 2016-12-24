import {Injectable} from '@angular/core';
import {Response, Http} from "@angular/http";
import {Observable} from "rxjs";
import {SchoolSubject} from "../model/subject";

@Injectable()
export class SubjectSearchService {
    private subjectUrl = 'api/subjects/';

    constructor(private http: Http) { }

    search(term: string): Observable<SchoolSubject[]> {
        const url = `${this.subjectUrl}/?name=${term}`;
        return this.http
            .get(url)
            .map((r: Response) => r.json() as SchoolSubject[]);
    }
}
