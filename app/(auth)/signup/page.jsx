import React, { useState } from 'react';
import { auth, provider } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { PrimaryButton } from '../Button/PrimaryButton';
import SignIn from './SignIn';

const SignUp = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleEmailPasswordSignUp = async (e) => {
        e.preventDefault();
        try {
            if (isSignUp) {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                console.log(userCredential);
            } else {
                await signInWithEmailAndPassword(auth, email, password);
            }
            // Handle successful sign-up (e.g., redirect to a dashboard)
        } catch (error) {
            setError(error.message);
            console.error('Error signing up:', error);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log(user);
            // Handle successful Google sign-in (e.g., redirect to a dashboard)
        } catch (error) {
            console.error('Error signing in with Google:', error);
        }
    };

    return (
        <div className="container mx-auto bg-white px-8 md:px-28 ">
            {isSignUp ? (
                <form onSubmit={handleEmailPasswordSignUp}>
                    <h2>Create Your Account</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`p-4 border border-gray-300 rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${isSignUp ? 'px-8' : 'px-28' // Conditional padding based on isSignUp state
                            }`}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`p-4 border border-gray-300 rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${isSignUp ? 'px-8' : 'px-28' // Conditional padding based on isSignUp state
                            }`}
                    />
                    {error && <p className="text-red-500">{error}</p>}
                    <PrimaryButton type="submit">Sign Up</PrimaryButton>
                </form>
            ) : (
                <SignIn auth={auth} /> 
            )}
            <PrimaryButton onClick={handleGoogleSignIn}>Sign In with Google</PrimaryButton>
            <p className="text-gray-600">
                {isSignUp ? 'Already have an account? ' : 'Don\'t have an account?'}
                <a href="#" onClick={() => setIsSignUp(!isSignUp)}>
                    {isSignUp ? 'Sign In' : 'Sign Up'}
                </a>
            </p>
        </div>
    );
};

export default SignUp;
