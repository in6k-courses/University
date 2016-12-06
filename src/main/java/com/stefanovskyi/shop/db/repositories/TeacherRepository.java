package com.stefanovskyi.shop.db.repositories;

import com.stefanovskyi.shop.model.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepository extends JpaRepository<Teacher, Integer> {
}