package com.stefanovskyi.university.controller;

import com.stefanovskyi.university.db.service.interfaces.StudentService;
import com.stefanovskyi.university.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/students")
public class StudentController {

    @Autowired
    StudentService studentService;

    @RequestMapping("/")
    private List<Student> getAllStudents() {
        return studentService.getAll();
    }

    @RequestMapping("/{id}")
    private Student getStudent(@PathVariable("id") Integer id) {
        return studentService.getOne(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    private void delete(@RequestBody Student student){
        studentService.delete(student);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    private Student add(@RequestBody Student student) {
        return studentService.add(student);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.POST)
    private Student update(@RequestBody Student student) {
        return studentService.update(student);
    }
}
