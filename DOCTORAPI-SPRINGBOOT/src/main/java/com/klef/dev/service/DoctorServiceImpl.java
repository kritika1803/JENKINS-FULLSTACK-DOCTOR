package com.klef.dev.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.dev.entity.Doctor;
import com.klef.dev.repository.DoctorRepository;

@Service
public class DoctorServiceImpl implements DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    @Override
    public Doctor addDoctor(Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    @Override
    public List<Doctor> getAllDoctors() {
        return doctorRepository.findAll();
    }

    @Override
    public Doctor getDoctorById(int id) {
        Optional<Doctor> opt = doctorRepository.findById(id);
        return opt.orElse(null);
    }

    @Override
    public Doctor updateDoctor(Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    @Override
    public void deleteDoctorById(int id) {
        doctorRepository.deleteById(id);
    }
}
