import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Teacher} from "../model/teacher";
import {Observable} from "rxjs";

@Injectable()
export class TeacherService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private teacherUrl = 'api/teachers/';

    constructor(private http: Http) { }

    getTeachers(): Observable<Teacher[]> {
        return this.http.get(this.teacherUrl)
            .map(response => response.json() as Teacher[])
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error);
        return Observable.throw(error.json().error || error);
    }

    getTeacher(id: number): Observable<Teacher> {
        return this.getTeachers()
            .map(teacher => teacher.find(teacher => teacher.id === id));
    }

    create(name: string): Observable<Teacher> {
        return this.http
            .post(this.teacherUrl, JSON.stringify({name: name}), {headers: this.headers})
            .map(res => res.json())
            .catch(this.handleError);
    }

    delete(id: number): Observable<void> {
        const url = `${this.teacherUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .map(() => null)
            .catch(this.handleError);
    }

    update(teacher: Teacher): Observable<Teacher> {
        const url = `${this.teacherUrl}/${teacher.id}`;
        return this.http
            .post(url, JSON.stringify(teacher), {headers: this.headers})
            .map(() => teacher)
            .catch(this.handleError);
    }
}
