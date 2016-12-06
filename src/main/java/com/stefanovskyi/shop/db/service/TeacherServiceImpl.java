package com.stefanovskyi.shop.db.service;

import com.stefanovskyi.shop.db.repositories.TeacherRepository;
import com.stefanovskyi.shop.model.Teacher;
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
        return teacherRepository.getOne(id);
    }

    @Override
    public void add(Teacher teacher) {
        teacherRepository.save(teacher);
    }
}
