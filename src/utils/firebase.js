// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmMGwYFo8EvmrR0DfcQTlbiyDYq0ApqZ8",
  authDomain: "netflix-gpt-bc83a.firebaseapp.com",
  projectId: "netflix-gpt-bc83a",
  storageBucket: "netflix-gpt-bc83a.appspot.com",
  messagingSenderId: "26142991904",
  appId: "1:26142991904:web:2a173e177320bb4956fe45",
  measurementId: "G-XJRHE09BF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);