import "./App.css";
import BookingPage from "./components/Booking/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";
import Home from "./components/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Cooking from "./components/Cooking";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route
                    path="/booking-confirmed"
                    element={<ConfirmedBooking />}
                />
                <Route path="*" element={<Cooking />} />
            </Routes>
        </Router>
    );
}

export default App;
