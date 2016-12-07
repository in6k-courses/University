import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Student } from '../model/student'
import { Http } from "@angular/http";

@Injectable()
export class StudentService {
  private studentUrl = 'api/students/';
  constructor(private http: Http) { }

  getStudents(): Promise<Student[]> {
    return this.http.get(this.studentUrl)
      .toPromise()
      .then(response => response.json() as Student[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getStudent(id: number): Promise<Student> {
    return this.getStudents()
      .then(students => students.find(student => student.id === id));
  }
}
