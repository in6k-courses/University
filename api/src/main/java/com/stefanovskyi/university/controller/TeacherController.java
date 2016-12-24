package com.stefanovskyi.university.controller;

import com.stefanovskyi.university.model.service.interfaces.TeacherService;
import com.stefanovskyi.university.model.university.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/teachers")
public class TeacherController {

    @Autowired
    TeacherService teacherService;

    @RequestMapping("/")
    private List<Teacher> getAllTeachers() {
        return teacherService.getAll();
    }

    @RequestMapping("/{id}")
    private Teacher getTeacher(@PathVariable("id") Integer id) {
        return teacherService.getOne(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    private void delete(@PathVariable("id") Integer id){
        teacherService.delete(id);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    private Teacher add(@RequestBody Teacher teacher) {
        return teacherService.add(teacher);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.POST)
    private Teacher update(@RequestBody Teacher teacher) {
        return teacherService.update(teacher);
    }
}
