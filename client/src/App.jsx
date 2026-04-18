import BookingForm from "./components/BookingForm";
import { addBooking } from "./services/bookingService";

function App() {
  const testBooking = () => {
    addBooking({
      name: "Test User",
      email: "test@gmail.com",
      service: "Web Dev",
      provider: "John",
      message: "Test booking"
    });
  };

  return (
    <div>
      <h1>BrandHive</h1>

      {/* Teammate test button */}
      <button onClick={testBooking}>Test Booking</button>

      {/* Your booking form */}
      <BookingForm service="Web Development" />
    </div>
  );
}

export default App;