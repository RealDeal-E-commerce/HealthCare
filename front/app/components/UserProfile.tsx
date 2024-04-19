'use client'
// Import necessary libraries and types
import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../lib/hooks';
import { RootState } from '../lib/store';
import { updateCurrentUser } from '../lib/CurrentUserSlice';
import styles from '../styles/UserProfile.module.css';
import { Appointment, AppointmentStatus, PaymentStatus } from '../types/types';

const UserProfile: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user, loading, error } = useAppSelector((state: RootState) => state.currentUser);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    imageUrl: '',
    phoneNumber: ''
  });

  // Set initial form values if user data is not available
  useEffect(() => {
    if (!user) {
      setUpdatedUser({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        imageUrl: 'https://via.placeholder.com/150',
        phoneNumber: '1234567890'
      });
    } else {
      // Update form values with user data
      setUpdatedUser({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        imageUrl: user.imageUrl,
        phoneNumber: user.phoneNumber || ''
      });
    }
  }, [user]);

  // Handle profile update
  const handleUpdateProfile = () => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(updateCurrentUser({ token, userData: updatedUser }))
        .unwrap()
        .then(() => {
          setIsEditing(false); // Close the edit mode
          console.log('User updated successfully!');
        })
        .catch((error) => {
          console.error('Failed to update user:', error);
          // Handle error (e.g., show error message)
        });
    }
  };

  // Handle cancel edit
  const handleCancelEdit = () => {
    setIsEditing(false);
    // Reset updatedUser state to clear the form
    setUpdatedUser({
      firstName: '',
      lastName: '',
      email: '',
      imageUrl: '',
      phoneNumber: ''
    });
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedUser((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Render loading state
  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  // Render error state
  if (error) {
    return (
      <div className={styles.error}>
        Error: {error}
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  // Render user profile
  return (
    <div className={styles.profileContainer}>
    <div className={styles.profileHeader}>
      <h1>Edit Profile</h1>
      {!isEditing && (
        <button className={styles.editButton} onClick={() => setIsEditing(true)}>
          Edit
        </button>
      )}
    </div>

    <div className={styles.profileContent}>
      {/* Appointments section */}
      <div className={styles.appointments}>
        <h2>Appointments</h2>
        {user && user.appointments && user.appointments.length > 0 ? (
          <ul className={styles.appointmentList}>
            {user.appointments.map((appointment: Appointment) => (
              <li key={appointment.id}>
                <strong>Doctor:</strong> {appointment.doctor?.id}<br />
                <strong>Date:</strong> {appointment.appointmentTime.toLocaleDateString()}<br />
                <strong>Time:</strong> {appointment.appointmentTime.toLocaleTimeString()}<br />
                <strong>Status:</strong> {appointment.status}<br />
                <strong>Payment Status:</strong> {appointment.paymentStatus}<br />
                <strong>Department:</strong> {appointment.appointmentDepartment}<br />
              </li>
            ))}
          </ul>
        ) : (
          <p>No appointments scheduled.</p>
        )}
      </div>

      {/* Profile information and edit form */}
      <div className={styles.profileInfo}>
        <div className={styles.avatarContainer}>
          <img src={updatedUser.imageUrl || 'https://via.placeholder.com/150'} alt="Profile Avatar" />
        </div>
        {isEditing ? (
          <form className={styles.editForm}>
            <input
              type="text"
              name="firstName"
              value={updatedUser.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              value={updatedUser.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
              required
            />
            <input
              type="email"
              name="email"
              value={updatedUser.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
            />

            <button type="button" onClick={handleUpdateProfile}>
              Save
            </button>
            <button type="button" onClick={handleCancelEdit}>
              Cancel
            </button>
          </form>
        ) : (
          <div className={styles.userInfo}>
            <p>
              <strong>First Name:</strong> {updatedUser.firstName}
            </p>
            <p>
              <strong>Last Name:</strong> {updatedUser.lastName}
            </p>
            <p>
              <strong>Email:</strong> {updatedUser.email}
            </p>
            <p>
              <strong>Phone:</strong> {updatedUser.phoneNumber}
            </p>
          </div>
        )}
      </div>
    </div>
  </div>
  );
};

export default UserProfile;
