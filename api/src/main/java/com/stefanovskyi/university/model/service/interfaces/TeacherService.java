package com.stefanovskyi.university.model.service.interfaces;

import com.stefanovskyi.university.model.university.Teacher;

import java.util.List;

public interface TeacherService {
    List<Teacher> getAll();
    Teacher getOne(Integer id);
    Teacher add(Teacher teacher);
    void delete(Integer id);
    Teacher update(Teacher teacher);
}
