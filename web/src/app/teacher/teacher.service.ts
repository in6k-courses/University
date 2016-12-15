import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Teacher} from "../model/teacher";

@Injectable()
export class TeacherService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private teacherUrl = 'api/teachers/';

    constructor(private http: Http) { }

    getTeachers(): Promise<Teacher[]> {
        return this.http.get(this.teacherUrl)
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

    delete(id: number): Promise<void> {
        const url = `${this.teacherUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    update(teacher: Teacher): Promise<Teacher> {
        const url = `${this.teacherUrl}/${teacher.id}`;
        return this.http
            .put(url, JSON.stringify(teacher), {headers: this.headers})
            .toPromise()
            .then(() => teacher)
            .catch(this.handleError);
    }

    create(name: string): Promise<Teacher> {
        return this.http
            .post(this.teacherUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }
}
