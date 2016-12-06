package com.stefanovskyi.shop.db.service;

import com.stefanovskyi.shop.model.Subject;

import java.util.List;

public interface SubjectService {
    List<Subject> getAll();
    Subject getOne(Integer id);
    void add(Subject subject);
}
