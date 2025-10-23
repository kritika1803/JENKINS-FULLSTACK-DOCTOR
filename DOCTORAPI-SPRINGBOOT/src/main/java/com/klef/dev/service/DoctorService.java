package com.klef.dev.service;

import java.util.List;
import com.klef.dev.entity.Doctor;

public interface DoctorService {
    
    Doctor addDoctor(Doctor doctor);
    List<Doctor> getAllDoctors();
    Doctor getDoctorById(int id);
    Doctor updateDoctor(Doctor doctor);
    void deleteDoctorById(int id);
}
