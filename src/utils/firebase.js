// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC-QDXdjyMVhzyYLnl4ay9CBYapXy0LlA",
  authDomain: "netflixgpt-a3ed1.firebaseapp.com",
  projectId: "netflixgpt-a3ed1",
  storageBucket: "netflixgpt-a3ed1.firebasestorage.app",
  messagingSenderId: "992464226575",
  appId: "1:992464226575:web:333ea1735cde961195d67a",
  measurementId: "G-G54EHCMXGP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
