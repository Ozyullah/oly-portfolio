// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxJJgud9Gq-dnwczmZz0XmWok8vU7rFf4",
  authDomain: "oly-portfolio.firebaseapp.com",
  projectId: "oly-portfolio",
  storageBucket: "oly-portfolio.appspot.com",
  messagingSenderId: "1031008138643",
  appId: "1:1031008138643:web:e19710448111b710026466"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;