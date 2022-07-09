// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCG6Gyn7TXWmYP_MhaifQWSPQegMK-ZAWY",
    authDomain: "tanglaw-repository-system.firebaseapp.com",
    projectId: "tanglaw-repository-system",
    storageBucket: "tanglaw-repository-system.appspot.com",
    messagingSenderId: "980761217431",
    appId: "1:980761217431:web:e2bd3aa488c73fd21b5cd2",
    measurementId: "G-8VR20HVW48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); // export the auth config
export const db = getFirestore(app); // export the db config
export const analytics = getAnalytics(app); // google analytics

export default app;