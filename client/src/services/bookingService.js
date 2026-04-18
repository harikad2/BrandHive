import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../firebase/config";

const db = getFirestore(app);

export const addBooking = async (data) => {
  try {
<<<<<<< HEAD
    const docRef = await addDoc(collection(db, "bookings"), data);
    console.log("Document written with ID:", docRef.id);
  } catch (error) {
    console.error("Error adding document:", error);
    alert("Error saving booking");
=======
    await addDoc(collection(db, "bookings"), data);
    console.log("Booking stored!");
  } catch (error) {
    console.error(error);
>>>>>>> 3bf4f77d18e608bb5054035bf6dbedc144aed0ad
  }
};