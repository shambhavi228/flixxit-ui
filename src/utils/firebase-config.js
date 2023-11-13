
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpcbCcBvslyA9rUCnGy5HwYOQUy-E3qj0",
  authDomain: "flixxit-83bf8.firebaseapp.com",
  projectId: "flixxit-83bf8",
  storageBucket: "flixxit-83bf8.appspot.com",
  messagingSenderId: "467233289052",
  appId: "1:467233289052:web:67c57303e28267da9bc799",
  measurementId: "G-NC6Y2H1EF2"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth= getAuth(app);