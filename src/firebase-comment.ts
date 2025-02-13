import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCBpRA2-oc3b5pdRLfECJOFmhj7oHEBprI",
    authDomain: "portfolio-f0b31.firebaseapp.com",
    projectId: "portfolio-f0b31",
    storageBucket: "portfolio-f0b31.firebasestorage.app",
    messagingSenderId: "62658319130",
    appId: "1:62658319130:web:0d95221837548d669152a3"
  };
  
// Initialiser avec un nom unique
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };