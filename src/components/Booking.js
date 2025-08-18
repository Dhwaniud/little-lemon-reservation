import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Reservations from "./Reservations";

function Booking() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Reservations />
            </main>
            <Footer />
        </>
    );
}

export default Booking;
