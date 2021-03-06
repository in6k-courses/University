package com.stefanovskyi.university.db.service;

import com.stefanovskyi.university.db.repositories.SubjectRepository;
import com.stefanovskyi.university.model.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class SubjectServiceImpl implements SubjectService {

    @Autowired
    SubjectRepository subjectRepository;

    @Override
    public List<Subject> getAll() {
        return subjectRepository.findAll();
    }

    @Override
    public Subject getOne(Integer id) {
        return subjectRepository.findOne(id);
    }

    @Override
    public void add(Subject subject) {
        subjectRepository.save(subject);
    }
}
