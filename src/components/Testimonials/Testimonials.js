import { reviews } from "./reviews";
import ReviewCard from "./ReviewCard";

function Testimonials() {
    return (
        <section className="testimonials">
            <div className="container column">
                <h1> Testimonials</h1>
                <div className="content">
                    {reviews.map((review) => (
                        <ReviewCard
                            key={review.name}
                            name={review.name}
                            rating={review.rating}
                            desc={review.description}
                            imgSrc={review.imgSrc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
