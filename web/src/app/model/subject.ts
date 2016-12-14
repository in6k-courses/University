import {Student} from "./student";
export class Subject {
    id: number;
    name: string;
    students: Set<Student>;
    teacherId: number;
}
