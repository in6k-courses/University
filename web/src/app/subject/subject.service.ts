import { Injectable } from '@angular/core';

import {Http} from "@angular/http";
import {Subject} from "../model/subject";

@Injectable()
export class SubjectService {
  private subjectUrl = 'api/subjects/';
  constructor(private http: Http) { }

  getSubjects(): Promise<Subject[]> {
    return this.http.get(this.subjectUrl)
        .toPromise()
        .then(response => response.json() as Subject[])
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
}
