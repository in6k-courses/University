package com.stefanovskyi.university.controller;

import com.stefanovskyi.university.db.service.SubjectService;
import com.stefanovskyi.university.model.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/api/subject")
public class SubjectController {

    @Autowired
    SubjectService subjectService;

    @RequestMapping("/")
    @ResponseBody
    private List<Subject> getAllSubjects() {
        return subjectService.getAll();
    }

    @RequestMapping("/{id}")
    @ResponseBody
    private Subject getSubject(@PathVariable("id") Integer id) {
        return subjectService.getOne(id);
    }
}
