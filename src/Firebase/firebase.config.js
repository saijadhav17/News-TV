import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4yFDajwo7aNCeCEts8emagyZx41qSe5Y",
  authDomain: "news-tv-285cb.firebaseapp.com",
  projectId: "news-tv-285cb",
  storageBucket: "news-tv-285cb.appspot.com",
  messagingSenderId: "768345921588",
  appId: "1:768345921588:web:b7fdbd6cf7e7f314fa9261"
};


export const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();

export const auth = getAuth();