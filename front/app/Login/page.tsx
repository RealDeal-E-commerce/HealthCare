'use client'
import { useState, ChangeEvent } from "react";
import axios from "axios";
// import Dropzone from 'react-dropzone';
import { useAppDispatch } from "../lib/hooks";
import { signup } from '../lib/SignUpSlice';
import { User } from '../types/types';

interface SignupProps {}

const Signup: React.FC<SignupProps> = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("user");
  const [error, setError] = useState<string>("");
  const [speciality, setSpecialization] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [image, setImage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  const handleImageDrop = async (acceptedFiles: File[]) => {
    // Implement image upload logic here
  };

  return (
    <div>
      <div className="form doctor-form" style={{ width: "50%", display: "flex", flexDirection: "column", alignItems: "center", marginLeft:'340px',backgroundColor:'white'}}>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
            required
          />
          <select
            name="role"
            value={role}
            onChange={handleChange}
            required
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
            />
          )}
          <input
            type="text"
            placeholder="Profile Image URL"
            name="imageUrl"
            value={image}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
