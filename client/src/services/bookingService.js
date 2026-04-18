import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../firebase/config";

const db = getFirestore(app);

export const addBooking = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "bookings"), data);
    console.log("Document written with ID:", docRef.id);
    return docRef;
  } catch (error) {
    console.error("Error adding document:", error);
    throw error;
  }
};