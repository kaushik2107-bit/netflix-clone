// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApSE8iAPs6nMT9ehfFSCKBh5tuqjcfgx0",
  authDomain: "netflix-clone-2c8f4.firebaseapp.com",
  projectId: "netflix-clone-2c8f4",
  storageBucket: "netflix-clone-2c8f4.appspot.com",
  messagingSenderId: "992473025981",
  appId: "1:992473025981:web:cba93153f61750731496d4",
};

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
