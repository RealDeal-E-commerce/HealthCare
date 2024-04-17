'use client'

import { useState } from 'react';
// import { useRouter } from 'next/router';
// import { connect } from 'react-redux'; // Import connect
import { signIn } from '../lib/SignInSlice';
import Navbar from '../components/Navbar';
import { useAppDispatch } from "../lib/hooks";
import './pageS.css';

interface SignInProps {
  login: (body: { email: string; password: string }) => void;
  error: string;
}

const SignIn: React.FC<SignInProps> = ({ login, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      email,
      password,
    };
    dispatch(signIn(body));
    console.log(email,'hhhhh');
  };

  return (
    <div>
      <Navbar />
      <div className='form-container'>
        <form className='form' onSubmit={handleSubmit}>
          <div className='container'>
            <div className='image-container'>
              <img
                src='https://media.istockphoto.com/id/1319031310/photo/doctor-writing-a-medical-prescription.jpg?s=612x612&w=0&k=20&c=DWZGM8lBb5Bun7cbxhKT1ruVxRC_itvFzA9jxgoA0N8='
                alt='Doctor'
                className='image'
              />
            </div>
            <div className='input-container'>
              <input
                className='input'
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                className='input'
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button className='submit-button' type='submit'>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
