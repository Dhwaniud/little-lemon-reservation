import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Main from "./Main";
import Checkmark from "../assets/checkmark.svg";
import { useLocation } from "react-router-dom";

function ConfirmedBooking() {
    const { state } = useLocation();

    return (
        <>
            <Header />
            <Main>
                <Hero />
                <section className="booking-confirmed">
                    <div className="container column">
                        <h1>Reservation Confirmed!</h1>
                        <img src={Checkmark} alt="checkmark icon" />
                        <p>
                            Hello {state?.name}, your reservation is
                            <br />
                            confirmed for {state?.time ?? "--:--"}.
                        </p>
                        <br />
                        <p>See you soon!</p>
                    </div>
                </section>
            </Main>
            <Footer />
        </>
    );
}

export default ConfirmedBooking;
