import { Injectable } from '@angular/core';

import {Http, Headers} from "@angular/http";
import {Subject} from "../model/subject";

@Injectable()
export class SubjectService {
  private subjectUrl = 'api/subjects/';
  constructor(private http: Http) { }
  private headers = new Headers({'Content-Type': 'application/json'});

  getSubjects(): Promise<Subject[]> {
    return this.http.get(this.subjectUrl)
        .toPromise()
        .then(response => response.json() as Subject[])
        .catch(this.handleError);
  }

    create(name: string): Promise<Subject> {
        return this.http
            .post(this.subjectUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getSubject(id: number): Promise<Subject> {
    return this.getSubjects()
        .then(subjects => subjects.find(subject => subject.id === id));
  }

    delete(id: number): Promise<void> {
        const url = `${this.subjectUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    update(subject: Subject): Promise<Subject> {
        const url = `${this.subjectUrl}/${subject.id}`;
        return this.http
            .put(url, JSON.stringify(subject), {headers: this.headers})
            .toPromise()
            .then(() => subject)
            .catch(this.handleError);
    }
}
