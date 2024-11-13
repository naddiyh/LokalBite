
"use client"; 

import Image from "next/image";
import GoogleIcon from "next/image";
import { useState } from "react";
import { loginWithEmailPassword, loginWithGoogle } from "../../features/auth/useAuth"; 

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 


  const handleLogin = async () => {
    setError("");
    try {
      const userCredential = await loginWithEmailPassword(email, password);
      console.log("Logged in:", userCredential.user);
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        setError("Invalid credentials. Please check your email and password.");
      } else if (error.code === "auth/user-not-found") {
        setError("No account found with this email.");
      } else if (error.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
      } else if (error.code === "auth/too-many-requests") {
        setError("Too many unsuccessful login attempts. Please try again later.");
      } else {
        setError("An error occurred. Please try again.");
      }
      console.error("Login error:", error.message);
    }
  };

  // Handle Google sign-in
  const handleGoogleSignIn = async () => {
    setError("");
    try {
      const userCredential = await loginWithGoogle();
      console.log("Google sign-in:", userCredential.user);
    } catch (error) {
      setError("Failed to sign in with Google. Please try again.");
      console.error("Google sign-in error:", error.message);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col md:flex-row items-center md:items-start">
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 h-1/3 md:h-full flex flex-col">
        <div className="absolute top-[10%] left-[5%] md:top-[20%] md:left-[10%] flex flex-col">
          <h1 className="text-2xl md:text-4xl text-white font-bold my-4">Indonesia Culinary</h1>
          <p className="text-lg md:text-xl text-white font-normal">Get your Bali belly here</p>
        </div>
        <Image
          src="/images/login.jpg"
          width={100}
          height={100}
          alt="Cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Login Form Section */}
      <div className="w-full md:w-1/2 h-2/3 md:h-full bg-[#f5f5f5] flex flex-col p-6 md:p-20 justify-between items-center">
        <h1 className="w-full max-w-[500px] mx-auto text-lg md:text-xl text-[#060606] font-semibold mr-auto">
          Brand
        </h1>

        <div className="w-full flex flex-col max-w-[500px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">Login</h3>
            <p className="text-base mb-2">Welcome! Please enter your details.</p>
          </div>

          {/* Error message display */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <div className="w-full flex flex-col">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p className="text-sm">Remember Me</p>
            </div>
            <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
              Forget password?
            </p>
          </div>

          <div className="w-full flex flex-col my-4">
            <button
              onClick={handleLogin}
              className="w-full text-white my-2 bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
            >
              Log in
            </button>
            <button className="w-full text-[#060606] my-2 bg-white border border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
              Register
            </button>
          </div>

          <div className="w-full flex items-center justify-center relative py-2">
            <div className="w-full h-[1px] bg-black"></div>
            <p className="text-lg absolute text-black/80 bg-[#f5f5f5]">or</p>
          </div>
          <div
            onClick={handleGoogleSignIn}
            className="w-full text-[#060606] my-2 bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
          >
            <GoogleIcon src="/images/google.png" width={24} height={24} className="h-6 mr-2" alt="Google Icon" />
            Sign in with Google
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-[#060606]">
            Don't have an account?{" "}
            <span className="font-semibold underline underline-offset-2 cursor-pointer">
              Sign up for free
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
