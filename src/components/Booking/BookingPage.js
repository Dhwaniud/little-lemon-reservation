import { useReducer } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Hero from "../Hero";
import Main from "../Main";
import BookingForm from "./BookingForm";
import { useNavigate } from "react-router-dom";

export const updateTimes = (_, action) => {
    const dateObj = new Date(action);
    return window.fetchAPI(dateObj);
};

export const initializeTimes = () => {
    const dateObj = new Date();
    return window.fetchAPI(dateObj);
};

function BookingPage() {
    const navigate = useNavigate();

    const [availableTimes, dispatch] = useReducer(
        updateTimes,
        null,
        initializeTimes
    );

    function submitForm(formData) {
        if (window.submitAPI(formData)) {
            navigate("/booking-confirmed", {
                state: {
                    name: formData.firstName,
                    time: formData.date + " " + formData.time,
                },
            });
        }
    }

    return (
        <>
            <Header />
            <Main>
                <Hero />
                <section className="reservations">
                    <div className="container column">
                        <h1>Reserve a table</h1>
                        <BookingForm
                            availableTimes={availableTimes}
                            setAvailableTimes={dispatch}
                            onSubmit={submitForm}
                        />
                    </div>
                </section>
            </Main>
            <Footer />
        </>
    );
}

export default BookingPage;
