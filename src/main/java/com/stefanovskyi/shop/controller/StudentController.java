package com.stefanovskyi.shop.controller;

import com.stefanovskyi.shop.db.service.StudentService;
import com.stefanovskyi.shop.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/student")
public class StudentController {

    @Autowired
    StudentService studentService;

    @RequestMapping("/")
    @ResponseBody
    private List<Student> getAllStudents() {
        return studentService.getAll();
    }

    @RequestMapping("/{id}")
    @ResponseBody
    private Student getTask(@PathVariable("id") Integer id) {
        return studentService.getOne(id);
    }
}
