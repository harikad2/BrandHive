import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBA8pfJa9tnLM7mMAgLJP7zYTmtOpsMdoY",
  authDomain: "brandhive-e94e2.firebaseapp.com",
  projectId: "brandhive-e94e2",
  storageBucket: "brandhive-e94e2.firebasestorage.app",
  messagingSenderId: "562640141926",
  appId: "1:562640141926:web:0b4031b6b4c742289377a7",
  measurementId: "G-P2MGXMLZL7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

async function test() {
  try {
    console.log("Testing Auth Signup...");
    const email = `test${Date.now()}@example.com`;
    await createUserWithEmailAndPassword(auth, email, "password123");
    console.log("Auth Signup success!");
  } catch (e) {
    console.error("Auth Signup failed:", e.message);
  }

  try {
    console.log("Testing Auth Login...");
    await signInWithEmailAndPassword(auth, "test@example.com", "password123");
    console.log("Auth Login success!");
  } catch (e) {
    console.error("Auth Login failed:", e.message);
  }

  try {
    console.log("Testing Firestore...");
    const docRef = await addDoc(collection(db, "bookings"), {
      test: true,
      time: new Date()
    });
    console.log("Firestore success! Doc ID:", docRef.id);
  } catch (e) {
    console.error("Firestore failed:", e.message);
  }
  process.exit(0);
}

test();
