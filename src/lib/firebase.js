import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAA28yGZL4qb7lJbcsW0ED8sNyA63QZTkI",
  authDomain: "reactchat-d4592.firebaseapp.com",
  projectId: "reactchat-d4592",
  storageBucket: "reactchat-d4592.appspot.com",
  messagingSenderId: "838423799064",
  appId: "1:838423799064:web:22e12d69ad1f4fceef2a6d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()