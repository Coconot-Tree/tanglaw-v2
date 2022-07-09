// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFTnNB0J4zOEKfffs6TEeUMbbh3sYsF0M",
    authDomain: "tanglaw-repository.firebaseapp.com",
    projectId: "tanglaw-repository",
    storageBucket: "tanglaw-repository.appspot.com",
    messagingSenderId: "950744921530",
    appId: "1:950744921530:web:7f9c385457814db9fd5983",
    measurementId: "G-HBEP8EFB22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // export the auth config
export const db = getFirestore(app); // export the db config
export const analytics = getAnalytics(app); // google analytics

export default app;