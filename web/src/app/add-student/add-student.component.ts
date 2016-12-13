import { Component, OnInit } from '@angular/core';
import { StudentService } from "../services/student.service";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(
      private studentService:StudentService,
      private router:Router,
      private location:Location
  ) { }

  add(name:string):void{
    this.studentService.create(name);
  }

  ngOnInit() {
  }

  goBack(): void {
      this.location.back()
  }
}
