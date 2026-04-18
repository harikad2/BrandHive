import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../firebase/config";

const db = getFirestore(app);

export const addBooking = async (data) => {
  try {
    await addDoc(collection(db, "bookings"), data);
    console.log("Booking stored!");
  } catch (error) {
    console.error(error);
  }
};