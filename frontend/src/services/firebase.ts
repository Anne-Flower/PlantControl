// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCno9yG1cxGnImmq8KtKRfE1k-NnJuelxU",
  authDomain: "plant-control-77f5b.firebaseapp.com",
  projectId: "plant-control-77f5b",
  storageBucket: "plant-control-77f5b.firebasestorage.app",
  messagingSenderId: "275560241946",
  appId: "1:275560241946:web:d1d273b4d31d68b6c2aaa3"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(appFirebase);
export const firebaseAuth = getAuth(appFirebase);