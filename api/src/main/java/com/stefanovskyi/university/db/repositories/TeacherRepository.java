package com.stefanovskyi.university.db.repositories;

import com.stefanovskyi.university.model.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepository extends JpaRepository<Teacher, Integer> {
}
