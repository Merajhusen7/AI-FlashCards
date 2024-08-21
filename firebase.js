

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKlE0AyiAb7kgFHupQWfUQhI6BqW4r7iY",
  authDomain: "flashcard-saas-2.firebaseapp.com",
  projectId: "flashcard-saas-2",
  storageBucket: "flashcard-saas-2.appspot.com",
  messagingSenderId: "641596464595",
  appId: "1:641596464595:web:9d2caa100f907e5b6a2326",
  measurementId: "G-71BFEF35M4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);