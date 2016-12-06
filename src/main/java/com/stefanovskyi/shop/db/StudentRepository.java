package com.stefanovskyi.shop.db;

import com.stefanovskyi.shop.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Integer> {
}
