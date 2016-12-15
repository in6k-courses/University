package com.stefanovskyi.university.controller;

import com.stefanovskyi.university.db.service.SubjectService;
import com.stefanovskyi.university.model.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/subjects")
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

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    private void delete(@PathVariable("id") Integer id){
        subjectService.delete(id);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    private Subject add(@RequestBody Subject subject) {
        return subjectService.add(subject);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PATCH)
    private void update(@RequestBody Subject subject) {
        subjectService.update(subject);
    }
}
