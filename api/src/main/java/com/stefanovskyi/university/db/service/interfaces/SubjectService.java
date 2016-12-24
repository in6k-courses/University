package com.stefanovskyi.university.db.service.interfaces;

import com.stefanovskyi.university.model.Subject;

import java.util.List;

public interface SubjectService {
    List<Subject> getAll();
    Subject getOne(Integer id);
    Subject add(Subject subject);
    void delete(Integer id);
    Subject update(Subject subject);
}
