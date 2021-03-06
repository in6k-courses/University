package com.stefanovskyi.university.db.service;

import com.stefanovskyi.university.db.repositories.TeacherRepository;
import com.stefanovskyi.university.model.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class TeacherServiceImpl implements TeacherService {
    @Autowired
    TeacherRepository teacherRepository;

    @Override
    public List<Teacher> getAll() {
        return teacherRepository.findAll();
    }

    @Override
    public Teacher getOne(Integer id) {
        return teacherRepository.findOne(id);
    }

    @Override
    public void add(Teacher teacher) {
        teacherRepository.save(teacher);
    }
}
