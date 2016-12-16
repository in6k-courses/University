import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {SchoolSubject} from "../model/subject";

@Injectable()
export class SubjectService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private subjectUrl = 'api/subjects/';

    constructor(private http: Http) { }

    getSubjects(): Promise<SchoolSubject[]> {
        return this.http.get(this.subjectUrl)
            .toPromise()
            .then(response => response.json() as SchoolSubject[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getSubject(id: number): Promise<SchoolSubject> {
        return this.getSubjects()
            .then(subjects => subjects.find(subject => subject.id === id));
    }

    create(name: string): Promise<SchoolSubject> {
        return this.http
            .post(this.subjectUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.subjectUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    update(subject: SchoolSubject): Promise<SchoolSubject> {
        const url = `${this.subjectUrl}/${subject.id}`;
        return this.http
            .post(url, JSON.stringify(subject), {headers: this.headers})
            .toPromise()
            .then(() => subject)
            .catch(this.handleError);
    }
}
