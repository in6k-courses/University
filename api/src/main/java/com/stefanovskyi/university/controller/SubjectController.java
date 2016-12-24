package com.stefanovskyi.university.controller;

import com.stefanovskyi.university.model.service.interfaces.SubjectService;
import com.stefanovskyi.university.model.university.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subjects")
public class SubjectController {

    @Autowired
    SubjectService subjectService;

    @RequestMapping("/")
    private List<Subject> getAllSubjects() {
        return subjectService.getAll();
    }

    @RequestMapping("/{id}")
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

    @RequestMapping(value = "/{id}", method = RequestMethod.POST)
    private Subject update(@RequestBody Subject subject) {
        return subjectService.update(subject);
    }
}
