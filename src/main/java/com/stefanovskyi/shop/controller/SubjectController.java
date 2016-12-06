package com.stefanovskyi.shop.controller;

import com.stefanovskyi.shop.db.service.SubjectService;
import com.stefanovskyi.shop.model.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/subject")
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
    private Subject getTask(@PathVariable("id") Integer id) {
        return subjectService.getOne(id);
    }
}
