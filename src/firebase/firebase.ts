// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnW_otP1_VhuKQcEbdJ8bAzyHS0qTHfG8",
    authDomain: "taskly-dcb7e.firebaseapp.com",
    projectId: "taskly-dcb7e",
    storageBucket: "taskly-dcb7e.firebasestorage.app",
    messagingSenderId: "903603557149",
    appId: "1:903603557149:web:d919a1cdd5185db33147f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
export { database };
