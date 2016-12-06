package com.stefanovskyi.shop.db.service;

import com.stefanovskyi.shop.model.Teacher;

import java.util.List;

public interface TeacherService {
    List<Teacher> getAll();
    Teacher getOne(Integer id);
    void add(Teacher teacher);
}
