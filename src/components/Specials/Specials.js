import { dishes } from "./dishes";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

function Specials() {
    const navigate = useNavigate();

    return (
        <section className="specials bg-gray">
            <div className="container column">
                <div className="heading">
                    <h1>This week's Specials!</h1>
                    <button
                        className="btn btn-primary"
                        onClick={() => navigate("/menu")}
                    >
                        Online Menu
                    </button>
                </div>
                <section>
                    {dishes.map((dish) => (
                        <Card
                            key={dish.name}
                            name={dish.name}
                            price={dish.price}
                            description={dish.description}
                            imgSrc={dish.imageSrc}
                            altText={dish.altText}
                        />
                    ))}
                </section>
            </div>
        </section>
    );
}

export default Specials;
