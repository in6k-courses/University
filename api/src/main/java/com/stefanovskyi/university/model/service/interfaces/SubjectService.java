package com.stefanovskyi.university.model.service.interfaces;

import com.stefanovskyi.university.model.university.Subject;

import java.util.List;

public interface SubjectService {
    List<Subject> getAll();
    Subject getOne(Integer id);
    Subject add(Subject subject);
    void delete(Integer id);
    Subject update(Subject subject);
}
