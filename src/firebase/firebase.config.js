// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYNQSgspGWfy-jO2iOeBtf0o-iCz-rpcQ",
  authDomain: "react-dragon-news-auth-991fb.firebaseapp.com",
  projectId: "react-dragon-news-auth-991fb",
  storageBucket: "react-dragon-news-auth-991fb.appspot.com",
  messagingSenderId: "410207862024",
  appId: "1:410207862024:web:05e24ac878d546e24300bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;