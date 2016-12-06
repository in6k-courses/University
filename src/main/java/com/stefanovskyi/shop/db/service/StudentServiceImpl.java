package com.stefanovskyi.shop.db.service;

import com.stefanovskyi.shop.db.StudentRepository;
import com.stefanovskyi.shop.model.Student;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class StudentServiceImpl implements StudentService {

    @Autowired
    StudentRepository studentRepository;

    @Override
    public List<Student> getAll() {
        return studentRepository.findAll();
    }

    @Override
    public Student getOne(Integer id) {
        return studentRepository.getOne(id);
    }

    @Override
    public void add(Student student) {
        studentRepository.save(student);
    }

    @Override
    public void delete(Student student) {
        studentRepository.delete(student);
    }

    @Override
    public void update(Student student) {
        studentRepository.save(student);
    }
}
