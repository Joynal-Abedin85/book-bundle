// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjyed8MD67WODqF-10HrGOcBMxrjkWcp4",
  authDomain: "book-hub-14bb3.firebaseapp.com",
  projectId: "book-hub-14bb3",
  storageBucket: "book-hub-14bb3.firebasestorage.app",
  messagingSenderId: "1081269443682",
  appId: "1:1081269443682:web:1b7fee2ea87b66df03053b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);