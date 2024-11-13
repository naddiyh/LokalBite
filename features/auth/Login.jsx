"use client";

import React, { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { PrimaryButton } from '../Button/PrimaryButton';
import logoImage from '../../contoh lokalbite.JPG'

const Login = ({ setIsSignUp }) => { // Accept setIsSignUp as a prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Optionally, you can handle successful sign-in (e.g., redirect)
    } catch (error) {
      setError('Login failed. Please check your credentials.');
      console.error('Sign-in error:', error);
    }
  };

  return (
    <div className="space-y-6">
      <img src={logoImage} alt="Logo" /> {/* Add your image path */}
      <h2 className="text-2xl font-bold text-center text-gray-800">Sign In to Your Account</h2>
      {error && <p className="text-red-600 text-center">{error}</p>}
      <form onSubmit={handleSignIn} className="space-y-4">
        <div className="form-control">
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control">
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>

        <PrimaryButton type="submit" fullWidth={true} color={true} hover={true}>
          Sign In
        </PrimaryButton>
      </form>

      <p className="text-center text-sm text-gray-600 mt-4">
        Don't have an account?{' '}
        <a href="#" onClick={() => setIsSignUp(true)} className="font-semibold text-indigo-600 hover:text-indigo-500">
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default Login;