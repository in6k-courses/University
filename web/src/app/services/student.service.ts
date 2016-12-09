import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

import { Student } from '../model/student'

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

    private headers = new Headers({'Content-Type': 'application/json'});

  getStudent(id: number): Promise<Student> {
    return this.getStudents()
      .then(students => students.find(student => student.id === id));
  }

  create(name: string): Promise<Student> {
    return this.http
        .post(this.studentUrl, JSON.stringify({name: name}), {headers: this.headers})
        .toPromise()
        .then(res => res.json())
        .catch(this.handleError);
  }

    delete(id: number): Promise<void> {
        const url = `${this.studentUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    update(student: Student): Promise<Student> {
        const url = `${this.studentUrl}/${student.id}`;
        return this.http
            .put(url, JSON.stringify(student), {headers: this.headers})
            .toPromise()
            .then(() => student)
            .catch(this.handleError);
    }
}
