import Footer from "../Footer";
import Header from "../Header";
import Hero from "../Hero";
import BookingForm from "./BookingForm";

function BookingPage() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <section className="reservations">
                    <div className="container column">
                        <h1>Reserve a table</h1>
                        <BookingForm />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default BookingPage;
