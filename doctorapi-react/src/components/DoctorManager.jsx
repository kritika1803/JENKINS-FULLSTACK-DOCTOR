import { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import config from './config.js';

const DoctorManager = () => {
  const [doctors, setDoctors] = useState([]);
  const [doctor, setDoctor] = useState({
    id: '',
    name: '',
    gender: '',
    specialization: '',
    qualification: '',
    experience: '',
    consultationFee: '',
    email: '',
    password: '',
    contact: '',
    clinicAddress: '',
    workingHours: '',
    availabilityStatus: '',
    rating: '',
    about: '',
    dateOfJoining: ''
  });
  const [idToFetch, setIdToFetch] = useState('');
  const [fetchedDoctor, setFetchedDoctor] = useState(null);
  const [message, setMessage] = useState('');
  const [editMode, setEditMode] = useState(false);

  const baseUrl = `${config.url}/doctorapi`;

  useEffect(() => {
    fetchAllDoctors();
  }, []);

  const fetchAllDoctors = async () => {
    try {
      const res = await axios.get(`${baseUrl}/all`);
      setDoctors(res.data);
    } catch (error) {
      console.error('Error:', error);
      setMessage('Failed to fetch doctors.');
    }
  };

  const handleChange = (e) => {
    const value =
      e.target.name === 'experience' || e.target.name === 'consultationFee' || e.target.name === 'rating'
        ? parseFloat(e.target.value)
        : e.target.value;
    setDoctor({ ...doctor, [e.target.name]: value });
  };

  const validateForm = () => {
    for (let key in doctor) {
      if (!doctor[key] || doctor[key].toString().trim() === '') {
        setMessage(`Please fill out the ${key} field.`);
        return false;
      }
    }
    return true;
  };

  const addDoctor = async () => {
    if (!validateForm()) return;
    try {
      await axios.post(`${baseUrl}/add`, doctor);
      setMessage('Doctor added successfully.');
      fetchAllDoctors();
      resetForm();
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error adding doctor.');
    }
  };

  const updateDoctor = async () => {
    if (!validateForm()) return;
    try {
      await axios.put(`${baseUrl}/update`, doctor);
      setMessage('Doctor updated successfully.');
      fetchAllDoctors();
      resetForm();
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error updating doctor.');
    }
  };

  const deleteDoctor = async (id) => {
    try {
      const res = await axios.delete(`${baseUrl}/delete/${id}`);
      setMessage(res.data);
      fetchAllDoctors();
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error deleting doctor.');
    }
  };

  const getDoctorById = async () => {
    try {
      const res = await axios.get(`${baseUrl}/get/${idToFetch}`);
      setFetchedDoctor(res.data);
      setMessage('');
    } catch (error) {
      console.error('Error:', error);
      setFetchedDoctor(null);
      setMessage('Doctor not found.');
    }
  };

  const handleEdit = (doc) => {
    setDoctor(doc);
    setEditMode(true);
    setMessage(`Editing doctor with ID ${doc.id}`);
  };

  const resetForm = () => {
    setDoctor({
      id: '',
      name: '',
      gender: '',
      specialization: '',
      qualification: '',
      experience: '',
      consultationFee: '',
      email: '',
      password: '',
      contact: '',
      clinicAddress: '',
      workingHours: '',
      availabilityStatus: '',
      rating: '',
      about: '',
      dateOfJoining: ''
    });
    setEditMode(false);
  };

  return (
    <div className="employee-container">

      {message && (
        <div className={`message-banner ${message.toLowerCase().includes('error') ? 'error' : 'success'}`}>
          {message}
        </div>
      )}

      <h2>Doctor Management</h2>

      <div>
        <h3>{editMode ? 'Edit Doctor' : 'Add Doctor'}</h3>
        <div className="form-grid">
          <input type="number" name="id" placeholder="ID" value={doctor.id} onChange={handleChange} />
          <input type="text" name="name" placeholder="Name" value={doctor.name} onChange={handleChange} />
          <select name="gender" value={doctor.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="MALE">MALE</option>
            <option value="FEMALE">FEMALE</option>
          </select>

          <select name="specialization" value={doctor.specialization} onChange={handleChange}>
            <option value="">Select Specialization</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Neurology">Neurology</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="ENT">ENT</option>
            <option value="General Surgery">General Surgery</option>
            <option value="Gynecology">Gynecology</option>
            <option value="Psychiatry">Psychiatry</option>
            <option value="Radiology">Radiology</option>
            <option value="Anesthesiology">Anesthesiology</option>
            <option value="Urology">Urology</option>
            <option value="Ophthalmology">Ophthalmology</option>
            <option value="Oncology">Oncology</option>
            <option value="Endocrinology">Endocrinology</option>
            <option value="Gastroenterology">Gastroenterology</option>
            <option value="Nephrology">Nephrology</option>
            <option value="Pulmonology">Pulmonology</option>
            <option value="Rheumatology">Rheumatology</option>
            <option value="Emergency Medicine">Emergency Medicine</option>
          </select>

          <select name="qualification" value={doctor.qualification} onChange={handleChange}>
            <option value="">Select Qualification</option>
            <option value="MBBS">MBBS</option>
            <option value="BDS">BDS</option>
            <option value="MD">MD</option>
            <option value="MS">MS</option>
            <option value="DM">DM</option>
            <option value="MCh">MCh</option>
            <option value="MDS">MDS</option>
            <option value="PhD">PhD</option>
            <option value="DO">DO</option>
            <option value="Diploma">Diploma</option>
            <option value="Fellowship">Fellowship</option>
            <option value="Postgraduate Certificate">Postgraduate Certificate</option>
          </select>

          <input type="number" name="experience" placeholder="Experience (years)" value={doctor.experience} onChange={handleChange} />
          <input type="number" name="consultationFee" placeholder="Consultation Fee" value={doctor.consultationFee} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" value={doctor.email} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" value={doctor.password} onChange={handleChange} />
          <input type="text" name="contact" placeholder="Contact" value={doctor.contact} onChange={handleChange} />
          <input type="text" name="clinicAddress" placeholder="Clinic Address" value={doctor.clinicAddress} onChange={handleChange} />

          <select name="workingHours" value={doctor.workingHours} onChange={handleChange}>
            <option value="">Select Working Hours</option>
            <option value="08:00 AM - 12:00 PM">08:00 AM - 12:00 PM</option>
            <option value="12:00 PM - 04:00 PM">12:00 PM - 04:00 PM</option>
            <option value="04:00 PM - 08:00 PM">04:00 PM - 08:00 PM</option>
            <option value="09:00 AM - 05:00 PM">09:00 AM - 05:00 PM</option>
            <option value="10:00 AM - 06:00 PM">10:00 AM - 06:00 PM</option>
            <option value="Flexible">Flexible</option>
          </select>

          <select name="availabilityStatus" value={doctor.availabilityStatus} onChange={handleChange}>
            <option value="">Select Availability</option>
            <option value="Available">Available</option>
            <option value="On Leave">On Leave</option>
            <option value="Busy">Busy</option>
            <option value="Not Available">Not Available</option>
            <option value="Consultation Full">Consultation Full</option>
          </select>

          <input type="number" name="rating" placeholder="Rating" value={doctor.rating} onChange={handleChange} />
          <input type="text" name="about" placeholder="About Doctor" value={doctor.about} onChange={handleChange} />
          <input type="date" name="dateOfJoining" placeholder="Date of Joining" value={doctor.dateOfJoining} onChange={handleChange} />
        </div>

        <div className="btn-group">
          {!editMode ? (
            <button className="btn-blue" onClick={addDoctor}>Add Doctor</button>
          ) : (
            <>
              <button className="btn-green" onClick={updateDoctor}>Update Doctor</button>
              <button className="btn-gray" onClick={resetForm}>Cancel</button>
            </>
          )}
        </div>
      </div>

      <div>
        <h3>Get Doctor By ID</h3>
        <input type="number" value={idToFetch} onChange={(e) => setIdToFetch(e.target.value)} placeholder="Enter ID" />
        <button className="btn-blue" onClick={getDoctorById}>Fetch</button>

        {fetchedDoctor && (
          <div>
            <h4>Doctor Found:</h4>
            <pre>{JSON.stringify(fetchedDoctor, null, 2)}</pre>
          </div>
        )}
      </div>

      <div>
        <h3>All Doctors</h3>
        {doctors.length === 0 ? (
          <p>No doctors found.</p>
        ) : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  {Object.keys(doctor).map((key) => <th key={key}>{key}</th>)}
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {doctors.map((doc) => (
                  <tr key={doc.id}>
                    {Object.keys(doctor).map((key) => <td key={key}>{doc[key]}</td>)}
                    <td>
                      <div className="action-buttons">
                        <button className="btn-green" onClick={() => handleEdit(doc)}>Edit</button>
                        <button className="btn-red" onClick={() => deleteDoctor(doc.id)}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
};

export default DoctorManager;
