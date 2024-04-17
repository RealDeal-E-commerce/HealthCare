import React from 'react';
import './Patie.Module.css';

const patients = [
  {
    id: 'OPD-2345',
    date: '5/7/21',
    name: 'Deveon Lane',
    gender: 'Male',
    disease: 'Diabetes',
    status: 'Out-Patient',
    image: 'https://img.freepik.com/free-photo/happy-man-taking-selfie_23-2148372311.jpg',
  },
  {
    id: 'IPD-2424',
    date: '5/7/21',
    name: 'Albert Flores',
    gender: 'Male',
    disease: 'Diabetes',
    status: 'Out-Patient',
    image: 'https://img.freepik.com/free-photo/senior-man-purple-shirt-doing-selfie-using-smartphone-smiling-confident-standing-orange_141793-109141.jpg',
  },
  {
    id: 'OPD-2345',
    date: '8/15/21',
    name: 'Ella Lucia',
    gender: 'Female',
    disease: 'Diabetes',
    status: 'Out-Patient',
    image: 'https://img.freepik.com/premium-photo/radiant-beauty-portrait-young-woman-with-healthy-skin-pink-rose_1000764-4248.jpg',
  },
  {
    id: 'IPD-2424',
    date: '8/30/21',
    name: 'Albert Flores',
    gender: 'Male',
    disease: 'Diabetes',
    status: 'Out-Patient',
    image: 'https://img.freepik.com/premium-photo/self-portrait-handsome-young-man-looking-camera-smiling-while-standing-against-grey-background_425904-39797.jpg',
  },
];

const PatientList = () => {
  return (
    <div>
      <h2 className="recent-patients-title">Recent Patients</h2>
      <table className="patient-table">
        <thead>
          <tr className="header-row">
            <th className="cell-header">Patient Name</th>
            <th className="cell-header">Visit Id</th>
            <th className="cell-header">Date</th>
            <th className="cell-header">Gender</th>
            <th className="cell-header">Diseases</th>
            <th className="cell-header">Status</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td className="cell patient-name-cell">
                <div className="patient-image-container">
                  <img src={patient.image} alt={patient.name} className="patient-image" />
                </div>
                <span className="patient-name">{patient.name}</span>
              </td>
              <td className="cell">{patient.id}</td>
              <td className="cell">{patient.date}</td>
              <td className="cell">{patient.gender}</td>
              <td className="cell">{patient.disease}</td>
              <td className="cell">{patient.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;
