// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmkrBuiXyU37wJ2G8EFm5xiNmMM8w38Lc",
  authDomain: "fashion-store-ec13b.firebaseapp.com",
  projectId: "fashion-store-ec13b",
  storageBucket: "fashion-store-ec13b.appspot.com",
  messagingSenderId: "829546418484",
  appId: "1:829546418484:web:963efc7ae726fe6b6d5561"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
signInWithEmailAndPassword(auth, "susmithakalispudi@gmail.com","susmitha123")
  .then((userCredential) => {
    // Signed in 
    console.log(userCredential.user);
    // ...
  })
  .catch((error) => {
  });
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage};