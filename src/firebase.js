// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, inMemoryPersistence } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKTuTw18Eble__QYRUi5OuPfALqOwynR0",
  authDomain: "mettime-fba09.firebaseapp.com",
  projectId: "mettime-fba09",
  storageBucket: "mettime-fba09.firebasestorage.app",
  messagingSenderId: "635458391321",
  appId: "1:635458391321:web:30b73f91edb7a247008988"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
// Force non-persistent auth: user must log in after each reload/tab
setPersistence(auth, inMemoryPersistence).catch((err) => {
  console.error('Failed to set auth persistence:', err);
});