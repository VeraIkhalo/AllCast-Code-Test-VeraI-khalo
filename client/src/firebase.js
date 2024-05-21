// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCypWmw-g8wakW4nzUjepAOpGwTMxX1pIE',
  authDomain: "video-sharing-a3520.firebaseapp.com",
  projectId: "video-sharing-a3520",
  storageBucket: "video-sharing-a3520.appspot.com",
  messagingSenderId: "316850995340",
  appId: "1:316850995340:web:7e7693b1257ec469aa3ba9",
  measurementId: "G-F75XWQGX9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;