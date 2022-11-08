// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOJReAX7ly-vKdeRkAkuy71VtjR8t6pNQ",
  authDomain: "mm-website-admin.firebaseapp.com",
  projectId: "mm-website-admin",
  storageBucket: "mm-website-admin.appspot.com",
  messagingSenderId: "216504617991",
  appId: "1:216504617991:web:df7713e333a62f52a1eea2",
  measurementId: "G-7HXGSSBEN1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
