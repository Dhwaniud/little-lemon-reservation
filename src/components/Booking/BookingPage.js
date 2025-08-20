import { useReducer } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Hero from "../Hero";
import Main from "../Main";
import BookingForm from "./BookingForm";

const updateTimes = (_, action) => {
    const dateObj = new Date(action);
    return window.fetchAPI(dateObj);
};

const initializeTimes = () => {
    const dateObj = new Date();
    return window.fetchAPI(dateObj);
};

function BookingPage() {
    const [availableTimes, dispatch] = useReducer(
        updateTimes,
        null,
        initializeTimes
    );

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
                        />
                    </div>
                </section>
            </Main>
            <Footer />
        </>
    );
}

export default BookingPage;
