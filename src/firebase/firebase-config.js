// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firebase-firestore"
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFA_Kp4P_hQ06QjJRGWNCLDPyuW7pmK-o",
  authDomain: "monkey-blogging-9db55.firebaseapp.com",
  projectId: "monkey-blogging-9db55",
  storageBucket: "monkey-blogging-9db55.appspot.com",
  messagingSenderId: "823151616642",
  appId: "1:823151616642:web:4a304e75631ca3f16e0a9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)