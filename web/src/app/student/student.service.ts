import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Student} from '../model/student'
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class StudentService {
    private studentUrl = '/api/students/';

    constructor(private http: Http) { }

    private headers = new Headers({'Content-Type': 'application/json'});

    getStudents(): Observable<Student[]> {
        return this.http.get(this.studentUrl)
            .map(response => response.json() as Student[])
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error);
        return Observable.throw(error.json().error || error);
    }

    getStudent(id: number): Observable<Student> {
        return this.getStudents()
            .map(students => students.find(student => student.id === id));
    }

    create(name: string): Observable<Student> {
        return this.http
            .post(this.studentUrl, JSON.stringify({name: name}), {headers: this.headers})
            .map(res => res.json())
            .catch(this.handleError);
    }

    delete(id: number): Observable<void> {
        const url = `${this.studentUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .map(() => null)
            .catch(this.handleError);
    }

    update(student: Student): Observable<Student> {
        const url = `${this.studentUrl}/${student.id}`;
        return this.http
            .post(url, JSON.stringify(student), {headers: this.headers})
            .map(() => student)
            .catch(this.handleError);
    }
}
