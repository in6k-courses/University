package com.stefanovskyi.university.db.service;

import com.stefanovskyi.university.model.Student;

import java.util.List;

public interface StudentService {
    List<Student> getAll();
    Student getOne(Integer id);
    void add(Student student);
    void delete(Student student);
    void update(Student student);
}
