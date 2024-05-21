// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "fir-4f21e.firebaseapp.com",
  projectId: "fir-4f21e",
  storageBucket: "fir-4f21e.appspot.com",
  messagingSenderId: "339782082505",
  appId: "1:339782082505:web:15c040e28589fafe0bd218",
  measurementId: "G-VWNEDPY3V9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;
