import Scooter from "../../assets/scooter.svg";

function Card({ name, price, description, imgSrc, altText }) {
    return (
        <article className="card">
            <img src={imgSrc} alt={altText} className="card-image" />
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <p className="card-description">{description}</p>
                <h6 className="card-action">
                    <span>Order a delivery</span>
                    <img src={Scooter} alt="Scooter" />
                </h6>
            </div>
        </article>
    );
}

export default Card;
