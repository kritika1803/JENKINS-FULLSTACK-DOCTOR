package com.klef.dev.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.klef.dev.entity.Doctor;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Integer> {
    
    // Custom finder methods
    Doctor findByEmail(String email);
    Doctor findByContact(String contact);
}
