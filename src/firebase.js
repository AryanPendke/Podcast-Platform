// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYpI65VsE9Ep_DsMkXdZsd3XiLTuQA4zU",
  authDomain: "podcast-app-000.firebaseapp.com",
  projectId: "podcast-app-000",
  storageBucket: "podcast-app-000.appspot.com",
  messagingSenderId: "945825989394",
  appId: "1:945825989394:web:afddb6d957da45442829cb",
  measurementId: "G-BK6E3R2HVM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };
