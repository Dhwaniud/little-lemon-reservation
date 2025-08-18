import Footer from "../Footer";
import Header from "../Header";
import Hero from "../Hero";
import Main from "../Main";
import BookingForm from "./BookingForm";

function BookingPage() {
    return (
        <>
            <Header />
            <Main>
                <Hero />
                <section className="reservations">
                    <div className="container column">
                        <h1>Reserve a table</h1>
                        <BookingForm />
                    </div>
                </section>
            </Main>
            <Footer />
        </>
    );
}

export default BookingPage;
