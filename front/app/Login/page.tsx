'use client'
import React, { useState, ChangeEvent } from "react";
import { useAppDispatch } from "../lib/hooks";
import { signup } from '../lib/SignUpSlice';
import  './page.css';


interface SignupProps {}

const Signup: React.FC<SignupProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("user");
  const [speciality, setSpecialization] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [image, setImage] = useState<string>('');
  const dispatch = useAppDispatch();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const body = {
      role,
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      imageUrl: image,
      speciality,
    };
    
    dispatch(signup(body));
  };
  
  

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      case "role":
        setRole(value);
        break;
      case "speciality":
        setSpecialization(value);
        break;
      case "imageUrl":
        setImage(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="signup-container">
      <div className="form doctor-form">
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="FirstName"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            required
            className="form-input"
          />
          
          <input
            type="text"
            placeholder="LastName"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            required
            className="form-input"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
            required
            className="form-input"
          />
          <input
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
            required
            className="form-input"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
            required
            className="form-input"
          />
          <select
            name="role"
            value={role}
            onChange={handleChange}
            required
            className="form-input"
          >
            <option value="">Select Role</option>
            <option value="Doctor">Doctor</option>
            <option value="Patient">Patient</option>
          </select>
          {role === "Doctor" && (
            <input
              type="text"
              placeholder="Specialization"
              name="speciality"
              value={speciality}
              onChange={handleChange}
              required
              className="form-input"
            />
          )}
          <input
            type="text"
            placeholder="Profile Image URL"
            name="imageUrl"
            value={image}
            onChange={handleChange}
            required
            className="form-input"
          />
          <button type="submit" className="submit-button">Sign Up</button>
          <button type="button" className="signin-link" onClick={() => { window.location.href = "/SignIn"; }}>
          Already have an account? Sign in
        </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
