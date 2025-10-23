package com.klef.dev.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.klef.dev.entity.Doctor;
import com.klef.dev.service.DoctorService;

@RestController
@RequestMapping("/doctorapi/")
@CrossOrigin(origins = "*")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @GetMapping("/")
    public String home() {
        return "Doctor Management API - Docker Full Stack Project";
    }

    // Add Doctor
    @PostMapping("/add")
    public ResponseEntity<Doctor> addDoctor(@RequestBody Doctor doctor) {
        Doctor savedDoctor = doctorService.addDoctor(doctor);
        return new ResponseEntity<>(savedDoctor, HttpStatus.CREATED);
    }

    // Get all Doctors
    @GetMapping("/all")
    public ResponseEntity<List<Doctor>> getAllDoctors() {
        List<Doctor> doctors = doctorService.getAllDoctors();
        return new ResponseEntity<>(doctors, HttpStatus.OK);
    }

    // Get Doctor by ID
    @GetMapping("/get/{id}")
    public ResponseEntity<?> getDoctorById(@PathVariable int id) {
        Doctor doctor = doctorService.getDoctorById(id);
        if (doctor != null) {
            return new ResponseEntity<>(doctor, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Doctor with ID " + id + " not found.", HttpStatus.NOT_FOUND);
        }
    }

    // Update Doctor details
    @PutMapping("/update")
    public ResponseEntity<?> updateDoctor(@RequestBody Doctor doctor) {
        Doctor existing = doctorService.getDoctorById(doctor.getId());
        if (existing != null) {
            Doctor updatedDoctor = doctorService.updateDoctor(doctor);
            return new ResponseEntity<>(updatedDoctor, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Cannot update. Doctor with ID " + doctor.getId() + " not found.", HttpStatus.NOT_FOUND);
        }
    }

    // Delete Doctor by ID
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteDoctor(@PathVariable int id) {
        Doctor existing = doctorService.getDoctorById(id);
        if (existing != null) {
            doctorService.deleteDoctorById(id);
            return new ResponseEntity<>("Doctor with ID " + id + " deleted successfully.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Cannot delete. Doctor with ID " + id + " not found.", HttpStatus.NOT_FOUND);
        }
    }
}
