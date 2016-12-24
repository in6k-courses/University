import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {SchoolSubject} from "../model/subject";
import {Observable} from "rxjs";

@Injectable()
export class SubjectService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private subjectUrl = 'api/subjects/';

    constructor(private http: Http) { }

    getSubjects(): Observable<SchoolSubject[]> {
        return this.http.get(this.subjectUrl)
            .map(response => response.json() as SchoolSubject[])
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error);
        return Observable.throw(error.json().error || error);
    }

    getSubject(id: number): Observable<SchoolSubject> {
        return this.getSubjects()
            .map(subjects => subjects.find(subject => subject.id === id));
    }

    create(name: string): Observable<SchoolSubject> {
        return this.http
            .post(this.subjectUrl, JSON.stringify({name: name}), {headers: this.headers})
            .map(res => res.json())
            .catch(this.handleError);
    }

    delete(id: number): Observable<void> {
        const url = `${this.subjectUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .map(() => null)
            .catch(this.handleError);
    }

    update(subject: SchoolSubject): Observable<SchoolSubject> {
        const url = `${this.subjectUrl}/${subject.id}`;
        return this.http
            .post(url, JSON.stringify(subject), {headers: this.headers})
            .map(() => subject)
            .catch(this.handleError);
    }
}
