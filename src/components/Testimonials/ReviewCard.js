import StarIcon from "../../assets/star.png";

function ReviewCard({ name, rating, desc, imgSrc }) {
    return (
        <article className="review-card">
            <div className="review-rating">
                {Array.from({ length: rating }).map(() => (
                    <img src={StarIcon} alt="star" />
                ))}
            </div>
            <div className="review-person">
                <img src={imgSrc} alt={name} />
                <span>{name}</span>
            </div>
            <p className="review-comment">{desc}</p>
        </article>
    );
}

export default ReviewCard;
