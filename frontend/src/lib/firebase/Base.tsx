/* eslint-disable @typescript-eslint/no-explicit-any */
// Import Firebase dependencies
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  User,
} from "firebase/auth";
import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";

// Firebase configuration (Move to .env.local)
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

// Define user structure for Firestore
interface UserProfile {
  uid: string;
  email: string;
  name?: string;
  profilePicture?: string;
  bio?: string;
  DOB?: string;
  gender?: string;
  location?: string;
  followers: string[];
  following: string[];
  hidden: string[];
  notifications: string[];
  createdAt: any;
  updatedAt: any;
}

// Sign-up function
export const SignUpBase = async (
  email: string,
  password: string
): Promise<User | null> => {
  try {
    if (!email || !password)
      throw new Error("Email and password are required.");

    // Firebase Auth handles password security
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Store user profile in Firestore (WITHOUT password)
    const userProfile: UserProfile = {
      uid: user.uid,
      email,
      name: "",
      profilePicture: "",
      bio: "",
      DOB: "",
      gender: "",
      location: "",
      followers: [],
      following: [],
      hidden: [],
      notifications: [],
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    await setDoc(doc(db, "users", user.uid), userProfile);

    // Create empty chat collection for the user
    await setDoc(doc(db, "Chat", user.uid), { Message: [] });

    toast.success(`User signed up successfully`)
    console.log("User signed up successfully:", user);
    return user;
  } catch (error: any) {
    toast.error(`Sign-up error: ${error.message}`)
    console.error("Sign-up error:", error.message);
    return null;
  }
};

// Sign-in function
export const SignInBase = async (
  email: string,
  password: string
): Promise<User | null> => {
  try {
    if (!email || !password) {
      throw new Error("Email and password are required.");
    }

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    toast.success(`signed as ${userCredential.user} `);
    return userCredential.user;
  } catch (error: any) {
    toast.error(`Sign-in error: ${error.message}`);
    console.error("Sign-in error:", error.message);
    return null;
  }
};
