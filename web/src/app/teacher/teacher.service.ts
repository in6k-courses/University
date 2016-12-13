import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Teacher} from "../model/teacher";

@Injectable()
export class TeacherService {

  private subjectUrl = 'api/teachers/';
  constructor(private http: Http) { }

  getTeachers(): Promise<Teacher[]> {
    return this.http.get(this.subjectUrl)
        .toPromise()
        .then(response => response.json() as Teacher[])
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getTeacher(id: number): Promise<Teacher> {
    return this.getTeachers()
        .then(teacher => teacher.find(teacher => teacher.id === id));
  }
}
