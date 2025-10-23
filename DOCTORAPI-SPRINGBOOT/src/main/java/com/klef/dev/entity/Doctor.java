package com.klef.dev.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "doctor_table")
public class Doctor {

    @Id
    @Column(name = "doctor_id")
    private int id;

    @Column(name = "doctor_name", nullable = false, length = 50)
    private String name;

    @Column(name = "doctor_gender", nullable = false, length = 10)
    private String gender;

    @Column(name = "doctor_specialization", nullable = false, length = 50)
    private String specialization;

    @Column(name = "doctor_qualification", nullable = false, length = 50)
    private String qualification;

    @Column(name = "doctor_experience", nullable = false)
    private int experience;

    @Column(name = "doctor_consultation_fee", nullable = false)
    private double consultationFee;

    @Column(name = "doctor_email", nullable = false, unique = true, length = 50)
    private String email;

    @Column(name = "doctor_password", nullable = false, length = 50)
    private String password;

    @Column(name = "doctor_contact", nullable = false, unique = true, length = 20)
    private String contact;

    @Column(name = "doctor_clinic_address", nullable = false, length = 100)
    private String clinicAddress;

    @Column(name = "doctor_working_hours", length = 50)
    private String workingHours;

    @Column(name = "doctor_availability_status", length = 20)
    private String availabilityStatus; // Available, On Leave, etc.

    @Column(name = "doctor_rating")
    private double rating; // average patient rating

    @Column(name = "doctor_about", length = 500)
    private String about;

    @Column(name = "doctor_date_of_joining")
    private LocalDate dateOfJoining;

    // Getters and Setters
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getSpecialization() {
        return specialization;
    }
    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public String getQualification() {
        return qualification;
    }
    public void setQualification(String qualification) {
        this.qualification = qualification;
    }

    public int getExperience() {
        return experience;
    }
    public void setExperience(int experience) {
        this.experience = experience;
    }

    public double getConsultationFee() {
        return consultationFee;
    }
    public void setConsultationFee(double consultationFee) {
        this.consultationFee = consultationFee;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public String getContact() {
        return contact;
    }
    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getClinicAddress() {
        return clinicAddress;
    }
    public void setClinicAddress(String clinicAddress) {
        this.clinicAddress = clinicAddress;
    }

    public String getWorkingHours() {
        return workingHours;
    }
    public void setWorkingHours(String workingHours) {
        this.workingHours = workingHours;
    }

    public String getAvailabilityStatus() {
        return availabilityStatus;
    }
    public void setAvailabilityStatus(String availabilityStatus) {
        this.availabilityStatus = availabilityStatus;
    }

    public double getRating() {
        return rating;
    }
    public void setRating(double rating) {
        this.rating = rating;
    }

    public String getAbout() {
        return about;
    }
    public void setAbout(String about) {
        this.about = about;
    }

    public LocalDate getDateOfJoining() {
        return dateOfJoining;
    }
    public void setDateOfJoining(LocalDate dateOfJoining) {
        this.dateOfJoining = dateOfJoining;
    }

    @Override
    public String toString() {
        return "Doctor [id=" + id +
                ", name=" + name +
                ", gender=" + gender +
                ", specialization=" + specialization +
                ", qualification=" + qualification +
                ", experience=" + experience +
                ", consultationFee=" + consultationFee +
                ", email=" + email +
                ", contact=" + contact +
                ", clinicAddress=" + clinicAddress +
                ", workingHours=" + workingHours +
                ", availabilityStatus=" + availabilityStatus +
                ", rating=" + rating +
                ", about=" + about +
                ", dateOfJoining=" + dateOfJoining + "]";
    }
}
