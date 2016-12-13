import { Component, OnInit } from '@angular/core';
import { Teacher } from "../model/teacher";
import { TeacherService } from "../services/teacher.service";
import {sha1} from "@angular/compiler/src/i18n/digest";

@Component({
  moduleId: module.id.toString(),
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  show:boolean;
  addButtonText:string;
  teachers: Teacher [] = [];
  constructor(private teacherService : TeacherService) {}

  ngOnInit() {
    this.show = true;
    this.addButtonText = "Add student";
    this.teacherService.getTeachers()
      .then(teachers => this.teachers = teachers.slice(1,5));
  }

  showAddForm(): void {
      this.show = !this.show;
      if (this.show) this.addButtonText = "Add student";
      else this.addButtonText = "Hide form";
  }
}
