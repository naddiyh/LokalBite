"use client";

import React, { useEffect, useState } from 'react';
import { auth } from '@/config/firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';
import { PrimaryButton } from '@/components/button/PrimaryButton';
import Login from '@/app/(auth)/login/page';
import Image from 'next/image'

const SignUp = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });
        return () => unsubscribe();
    }, []);

    const handleEmailPasswordAuth = async (e) => {
        e.preventDefault();
        try {
            if (isSignUp) {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                console.log('User signed up:', userCredential);
            } else {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                console.log('User signed in:', userCredential);
            }
        } catch (error) {
            setError(error.message);
            console.error('Error signing up/signing in:', error);
        }
    };

    const handleGoogleAuth = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log('User signed in with Google:', user);
        } catch (error) {
            console.error('Error signing in with Google:', error);
        }
    };

    const userSignOut = async () => {
        try {
            await signOut(auth);
            console.log('Sign Out Successful');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <div className="container mx-auto bg-white px-8 md:px-28 py-8">
            {authUser ? (
                <div>
                    <p>Signed in as: {authUser.email}</p>
                    <PrimaryButton onClick={userSignOut}>Sign Out</PrimaryButton>
                </div>
            ) : (
                <>
                    <div>
                        <img src='/images/logo.png' alt="Logo" />
                        <h2 className="text-2xl font-bold text-center mb-4">
                            {isSignUp ? 'Create Your Account' : 'Sign In to Your Account'}
                        </h2>
                        <form onSubmit={handleEmailPasswordAuth}>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="p-4 border border-gray-300 rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="p-4 border border-gray-300 rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                required
                            />
                            {error && <p className="text-red-500">{error}</p>}
                            <PrimaryButton type="submit">
                                {isSignUp ? 'Sign Up' : 'Sign In'}
                            </PrimaryButton>
                        </form>
                    </div>
                    <PrimaryButton onClick={handleGoogleAuth}>
                        {isSignUp ? 'Sign up with Google' : 'Sign in with Google'}
                    </PrimaryButton>
                    <p className="text-gray-600 mt-4">
                        {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
                        <a
                            href="#"
                            onClick={() => setIsSignUp(!isSignUp)}
                            className="text-primary"
                        >
                            {isSignUp ? 'Sign In' : 'Sign Up'}
                        </a>
                    </p>
                </>
            )}
        </div>
    );
};

export default SignUp;
