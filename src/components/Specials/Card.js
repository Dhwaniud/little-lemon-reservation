import Scooter from "../../assets/scooter.svg";
import DishIcon from "../../assets/dish-icon.svg";

function Card({ name, price, description, imgSrc, altText }) {
    return (
        <article className="card">
            <img src={imgSrc} alt={altText} className="card-image" />
            <div className="card-body">
                <h4 className="card-title">
                    <div className="text-left">
                        <span>{name}</span>
                        <img src={DishIcon} alt="Dish icon" />
                    </div>
                    <div className="text-right">{`$${price.toFixed(2)}`}</div>
                </h4>
                <p className="card-description">{description}</p>
                <h6 className="card-action">
                    <a href="">Order a delivery</a>
                    <img src={Scooter} alt="Scooter" />
                </h6>
            </div>
        </article>
    );
}

export default Card;
