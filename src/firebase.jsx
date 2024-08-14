// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbbprn875WQrnpix2FzQTuRuxUVtaK59Y",
  authDomain: "authentication-92b8f.firebaseapp.com",
  projectId: "authentication-92b8f",
  storageBucket: "authentication-92b8f.appspot.com",
  messagingSenderId: "948463148477",
  appId: "1:948463148477:web:d78145ac11cd2b0d4dc6d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)
export {auth}