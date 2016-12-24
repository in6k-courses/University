import {Student} from "./student";
export class SchoolSubject {
    id: number;
    name: string;
    students: Set<Student>;
    teacherId: number;
}
