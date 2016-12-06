package com.stefanovskyi.shop.db.service;

import com.stefanovskyi.shop.db.repositories.SubjectRepository;
import com.stefanovskyi.shop.model.Subject;
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
        return subjectRepository.getOne(id);
    }

    @Override
    public void add(Subject subject) {
        subjectRepository.save(subject);
    }
}
