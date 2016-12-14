import {Subject} from "./subject";
export class Student {
  id: number;
  name: string;
  course: number;
  subjects: Set<Subject>;
}
