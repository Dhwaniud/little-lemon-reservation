import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Hero from "./Hero";
import Specials from "./Specials/Specials";
import Testimonials from "./Testimonials/Testimonials";
import About from "./About";

function Home() {
    return (
        <>
            <Header />
            <Main>
                <Hero />
                <Specials />
                <Testimonials />
                <About />
            </Main>
            <Footer />
        </>
    );
}

export default Home;
