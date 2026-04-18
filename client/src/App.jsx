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
      <button onClick={testBooking}>Test Booking</button>
    </div>
  );
}

export default App;