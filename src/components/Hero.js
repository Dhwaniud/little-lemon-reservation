import { useLocation, useNavigate } from "react-router-dom";
import FoodPlatter from "../assets/food-platter.jpg";

function Hero() {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <section className="hero">
            <div className="container">
                <article>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>
                        We are a family owned Mediterrainian restraurant,
                        focused on traditional recipes served with a modern
                        twist.
                    </p>
                    {location.pathname !== "/booking" && (
                        <button
                            className="btn btn-primary"
                            onClick={() => navigate("/booking")}
                        >
                            Reserve a Table
                        </button>
                    )}
                </article>
                <img src={FoodPlatter} alt="Food on a platter" />
            </div>
        </section>
    );
}

export default Hero;
