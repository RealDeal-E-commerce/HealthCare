"use client";
import { useState } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux'; // Import connect
import { signIn } from '../lib/SignInSlice';
import Navbar from '../components/Navbar';
import { useAppDispatch } from "../lib/hooks";

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
      <div className='frmm'>
        <form onSubmit={handleSubmit}>
          <h2 style={{ color: '#007e85', marginLeft: '110px' }}>Sign In</h2>
          <div className='container'>
            <div className=''>
              <img
                src='https://th.bing.com/th/id/OIP.czYUxy7G0x5DDRsqs9xq0QHaHa?w=204&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7'
                alt='Doctor'
                style={{
                  marginBottom: '20px',
                  borderRadius: '20%',
                  marginTop: '20px',
                  background: 'transparent',
                }}
              />
            </div>
            <div className='form'></div>
            <input
              style={{ width: '300px' }}
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              style={{ width: '300px' }}
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button style={{ width: '300px' }} type='submit'>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn; // Export SignIn component
