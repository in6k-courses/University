package com.stefanovskyi.university.controller;

import com.stefanovskyi.university.db.service.TeacherService;
import com.stefanovskyi.university.model.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/api/teachers")
public class TeacherController {

    @Autowired
    TeacherService teacherService;

    @RequestMapping("/")
    @ResponseBody
    private List<Teacher> getAllSubjects() {
        return teacherService.getAll();
    }

    @RequestMapping("/{id}")
    @ResponseBody
    private Teacher getSubject(@PathVariable("id") Integer id) {
        return teacherService.getOne(id);
    }
}
