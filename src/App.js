import "./App.css";
import BookingPage from "./components/Booking/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";
import Home from "./components/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route
                    path="/booking-confirmed"
                    element={<ConfirmedBooking />}
                />
            </Routes>
        </Router>
    );
}

export default App;
