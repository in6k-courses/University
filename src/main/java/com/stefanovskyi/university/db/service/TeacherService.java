package com.stefanovskyi.university.db.service;

import com.stefanovskyi.university.model.Teacher;

import java.util.List;

public interface TeacherService {
    List<Teacher> getAll();
    Teacher getOne(Integer id);
    void add(Teacher teacher);
}
