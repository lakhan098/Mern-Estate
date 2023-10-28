// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "gram-estate.firebaseapp.com",
  projectId: "gram-estate",
  storageBucket: "gram-estate.appspot.com",
  messagingSenderId: "671661314728",
  appId: "1:671661314728:web:ef99fe9be50b5f858da89d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);