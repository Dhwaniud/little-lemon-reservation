import FoodPlatter from "../assets/foodplatter.jpg";

function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <article>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterrainian restraurant, focused on traditional recipes served with a modern twist.</p>
                    <button className="btn btn-primary">Reserve a Table</button>
                </article>
                <img src={FoodPlatter} alt="Food on a platter"/>
            </div>
        </section>
    );
}

export default Hero;
