// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZsohrhMjNCykaoQdqLkROP-2_Ve7609E",
  authDomain: "runway-f7aeb.firebaseapp.com",
  projectId: "runway-f7aeb",
  storageBucket: "runway-f7aeb.appspot.com",
  messagingSenderId: "642837658409",
  appId: "1:642837658409:web:449a992be25c0596f15538"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };