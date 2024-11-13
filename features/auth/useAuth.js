import { auth, provider } from "@/config/firebase";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { toast } from "react-toastify";

/**

 * @param {string} email 
 * @param {string} password 
 * @returns {Promise} 
 */
export const loginWithEmailPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return userCredential;
  } catch (error) {
    throw error;
  }
};

/**
 * Function to register with email and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise} Firebase user credentials or error
 */
export const registerWithEmailPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return userCredential;
  } catch (error) {
    throw error;
  }
};

/**
 * Function to log in with Google popup
 * @returns {Promise} Firebase user credentials or error
 */
export const loginWithGoogle = async () => {
  try {
    const userCredential = await signInWithPopup(auth, provider);
    return userCredential;
  } catch (error) {
    throw error;
  }
};
