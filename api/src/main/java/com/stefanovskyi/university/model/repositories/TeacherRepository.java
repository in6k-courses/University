package com.stefanovskyi.university.model.repositories;

import com.stefanovskyi.university.model.university.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepository extends JpaRepository<Teacher, Integer> {
}
