
import React from 'react';
 
import AppointmentCalendar from '../components/AppointmentCalendar'; // Make sure this path points to your component

const CalendarPage: React.FC = () => {
  return (
    <div className="calendar-page">
      <h1>Appointments Calendar</h1>
      <AppointmentCalendar />
    </div>
  );
};

// Wrap the page component with the Redux wrapper to connect the Redux store
export default CalendarPage