import React from 'react';
import './Today.css';

const todayAppointments = [
    {
        name: 'Jhon Smith',
        date: 'Today',
        time: 'Ongoing',
        type: 'Clinic Consulting',
        image: 'https://img.freepik.com/free-photo/woman-with-wet-dark-hair-combed-back-wearing-silk-oversize-shirt-with-one-shoulder-nude_343059-1331.jpg',
    },
    {
        name: 'Frank Murray',
        date: 'Today',
        time: '10:25',
        type: 'Video Consulting',
        image: 'https://img.freepik.com/premium-photo/portrait-young-man-against-blue-background_1048944-17038912.jpg',
    },
    {
        name: 'Ella Lucia',
        date: 'Today',
        time: '15.45',
        type: 'Clinic Consulting',
        image: 'https://img.freepik.com/free-photo/close-up-brunette-woman-looking-camera-gray_171337-1000.jpg',
    },
];

const TodaysAppointments = () => {
  return (
    <div>
     <h2 className="appointments-title">Todays Appointments</h2>
      <table className="appointments-table">
        <thead>
          <tr className="header-roww">
            <th className="header-cell">Patient Name</th>
            <th className="header-cell">Date</th>
            <th className="header-cell">Time</th>
            <th className="header-cell">Type</th>
          </tr>
        </thead>
        <tbody>
          {todayAppointments.map((appointment) => (
            <tr key={appointment.date}>
              <td className="data-cell patient-name-cell">
                <div className="patient-image-container">
                  <img src={appointment.image} alt={appointment.name} className="patient-image" />
                </div>
                <span className="patient-name">{appointment.name}</span>
              </td>
              <td className="data-cell">{appointment.date}</td>
              <td className="data-cell">{appointment.time}</td>
              <td className="data-cell">{appointment.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodaysAppointments;