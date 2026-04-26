import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "./config";

export const auth = getAuth(app);
const db = getFirestore(app);

export const signup = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  // Store user data in Firestore
  await setDoc(doc(db, "users", userCredential.user.uid), {
    email: userCredential.user.email,
    createdAt: new Date()
  });
  return userCredential;
};

export const login = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

