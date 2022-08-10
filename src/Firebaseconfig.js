// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVlsWnw4Wmoj9B1MLmZG7yuu79daPkNKw",
  authDomain: "todolist-d57ae.firebaseapp.com",
  projectId: "todolist-d57ae",
  storageBucket: "todolist-d57ae.appspot.com",
  messagingSenderId: "834453597742",
  appId: "1:834453597742:web:2c557f109822606c6bf9bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app)