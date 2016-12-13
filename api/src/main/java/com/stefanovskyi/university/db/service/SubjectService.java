package com.stefanovskyi.university.db.service;

import com.stefanovskyi.university.model.Subject;

import java.util.List;

public interface SubjectService {
    List<Subject> getAll();
    Subject getOne(Integer id);
    void add(Subject subject);
    void delete(Integer id);
    void update(Subject subject);
}
