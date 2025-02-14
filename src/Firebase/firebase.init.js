// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyJkiXA1ZJWVfHp_-gCzLY8qPu3rwVJvo",
  authDomain: "twdevs-437fc.firebaseapp.com",
  projectId: "twdevs-437fc",
  storageBucket: "twdevs-437fc.firebasestorage.app",
  messagingSenderId: "751414506974",
  appId: "1:751414506974:web:316b013f27356e7b44994f",
  measurementId: "G-0JVX8L84D4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
const db = getFirestore(app);

export { db };