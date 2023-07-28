// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "xreq-project.firebaseapp.com",
  projectId: "xreq-project",
  storageBucket: "xreq-project.appspot.com",
  messagingSenderId: "704151635185",
  appId: "1:704151635185:web:e07070b5cbb1f00ed6d550",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
