package com.stefanovskyi.university.model.service.interfaces;

import com.stefanovskyi.university.model.university.Student;

import java.util.List;

public interface StudentService {
    List<Student> getAll();
    Student getOne(Integer id);
    Student add(Student student);
    void delete(Student student);
    Student update(Student student);
}
