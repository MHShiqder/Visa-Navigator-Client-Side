// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB2CpmEbkkShwa1mSpvpjJr9llZeSInY8",
  authDomain: "assignment-10-ph-ca700.firebaseapp.com",
  projectId: "assignment-10-ph-ca700",
  storageBucket: "assignment-10-ph-ca700.firebasestorage.app",
  messagingSenderId: "445453725835",
  appId: "1:445453725835:web:b0d524dc63ba575001e48e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);