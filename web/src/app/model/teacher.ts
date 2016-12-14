import {Subject} from "./subject";
export class Teacher {
    id: number;
    name: string;
    subjects: Set<Subject>;
}
