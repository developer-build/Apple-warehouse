// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPDUsNpEspYB-b_q8YUemjg8mp26BJCn0",
  authDomain: "phonesy-ad56a.firebaseapp.com",
  projectId: "phonesy-ad56a",
  storageBucket: "phonesy-ad56a.appspot.com",
  messagingSenderId: "304429202901",
  appId: "1:304429202901:web:9b3c2fab35b3c4f36c115c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
