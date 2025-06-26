import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "onecartlogin-92628.firebaseapp.com",
  projectId: "onecartlogin-92628",
  storageBucket: "onecartlogin-92628.firebasestorage.app",
  messagingSenderId: "779868129849",
  appId: "1:779868129849:web:6d2f662fa8d39aa1a35be8"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}