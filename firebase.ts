import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2DRXYxcvbQ5iMiU74hvG4NDt2gk013LE",
  authDomain: "chatgpt-clone-5d0a2.firebaseapp.com",
  projectId: "chatgpt-clone-5d0a2",
  storageBucket: "chatgpt-clone-5d0a2.appspot.com",
  messagingSenderId: "893738706973",
  appId: "1:893738706973:web:843e8bb6b8d9ea57e33ef4",
  measurementId: "G-M8C672SP79",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
