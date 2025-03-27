
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey:,
  authDomain: "podcast-app-000.firebaseapp.com",
  projectId: "podcast-app-000",
  storageBucket: "podcast-app-000.appspot.com",
  messagingSenderId: "945825989394",
  appId: "1:945825989394:web:afddb6d957da45442829cb",
  measurementId: "G-BK6E3R2HVM",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };
