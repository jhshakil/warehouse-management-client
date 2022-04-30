// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCifSbDcGTo3dqQ-dfWG9tQLhmvTCPfLnw",
    authDomain: "car-dealer-af8e9.firebaseapp.com",
    projectId: "car-dealer-af8e9",
    storageBucket: "car-dealer-af8e9.appspot.com",
    messagingSenderId: "489655446425",
    appId: "1:489655446425:web:38fb6743bbe7df7883c108"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;