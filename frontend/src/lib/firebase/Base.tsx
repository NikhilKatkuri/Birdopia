// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc
} from "firebase/firestore";
import HashBase4 from "../Encryption/Hashing.mjs";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBit9HIQWIzOjU0LxeNuIOM9QDEuFcsN_8",
  authDomain: "bridopia.firebaseapp.com",
  projectId: "bridopia",
  storageBucket: "bridopia.firebasestorage.app",
  messagingSenderId: "340688672267",
  appId: "1:340688672267:web:a248e76792c29b52e8590e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Sign-up function
export const SignUpBase = async (email:string, password:string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    const hashedPassword = HashBase4(password,"4");  
    if (!hashedPassword) throw new Error("Hashing function returned undefined.");

    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      email: email,
      password: hashedPassword, 
    });

    await setDoc(doc(db, "Chat", user.uid), {
      Message: [],
    });

    console.log("User signed up successfully:", user);
  } catch (error) {
    console.error("Sign-up error:", error);
  }
};

// Sign-in function
export const SignInBase = async (email:string, password:string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User signed in:", userCredential.user);
  } catch (error) {
    console.error("Sign-in error:", error);
  }
};
