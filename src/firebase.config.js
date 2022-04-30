// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC_bX1sEWz7vizNkdkM6ysgfFeryBkN8gw",
  authDomain: "house-marketplace-app-db70f.firebaseapp.com",
  projectId: "house-marketplace-app-db70f",
  storageBucket: "house-marketplace-app-db70f.appspot.com",
  messagingSenderId: "160663571143",
  appId: "1:160663571143:web:add62e5b78ed0b78a6cce2"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()