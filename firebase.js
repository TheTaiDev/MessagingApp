import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCk3KVS2pJGgNahdtdikK8HJgTgr8B1X8",
  authDomain: "messagingapp-919de.firebaseapp.com",
  projectId: "messagingapp-919de",
  storageBucket: "messagingapp-919de.appspot.com",
  messagingSenderId: "773258011571",
  appId: "1:773258011571:web:3a3da343edda26c8c521c6",
  measurementId: "G-F36N036T1E",
};
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
