package com.stefanovskyi.university.controller;

import com.stefanovskyi.university.db.service.TeacherService;
import com.stefanovskyi.university.model.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/teachers")
public class TeacherController {

    @Autowired
    TeacherService teacherService;

    @RequestMapping("/")
    @ResponseBody
    private List<Teacher> getAllTeachers() {
        return teacherService.getAll();
    }

    @RequestMapping("/{id}")
    @ResponseBody
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

    @RequestMapping(value = "/{id}", method = RequestMethod.PATCH)
    private void update(@RequestBody Teacher teacher) {
        teacherService.update(teacher);
    }
}
