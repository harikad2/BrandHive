import { useState } from "react";
import { addBooking } from "../services/bookingService";

export default function BookingForm({ service }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async () => {
    if (!form.name || !form.email) {
      alert("Fill all fields");
      return;
    }

    await addBooking({
      ...form,
      service,
      createdAt: new Date(),
    });

    alert("Booking Sent ✅");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <textarea
        placeholder="Message"
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}