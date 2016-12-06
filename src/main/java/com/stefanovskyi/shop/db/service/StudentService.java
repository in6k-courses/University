package com.stefanovskyi.shop.db.service;

import com.stefanovskyi.shop.model.Student;

import java.util.List;

public interface StudentService {
    List<Student> getAll();
    Student getOne(Integer id);
    void add(Student student);
    void delete(Student student);
    void update(Student student);
}
