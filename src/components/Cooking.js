import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import CookingVideo from "../assets/cooking.mp4";

function Cooking() {
    return (
        <>
            <Header />
            <Main>
                <div className="container column" style={{ alignItems: "center"}}>
                    <h1> Hey! I am still cooking...</h1>
                    <video width="320" height="240" autoPlay loop muted>
                        <source src={CookingVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </Main>
            <Footer />
        </>
    );
}

export default Cooking;
