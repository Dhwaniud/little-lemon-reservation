import GreekSalad from "../assets/greek-salad.jpg";
import Bruschetta from "../assets/bruschetta.svg";
import LemonDessert from "../assets/lemon-dessert.jpg";

function Specials() {
    return (
        <section className="specials bg-gray">
            <div className="container column">
                <div className="heading">
                    <h1>This week's Specials!</h1>
                    <button className="btn btn-primary">Online Menu</button>
                </div>
                <section>
                    <article className="card">
                        <img
                            src={GreekSalad}
                            alt="Greek salad"
                            className="card-image"
                        />
                        <div className="card-body">
                            <h4 className="card-title">Greek salad</h4>
                            <p className="card-description"></p>
                            <h6 className="card-action">Order a delivery</h6>
                        </div>
                    </article>
                    <article className="card">
                        <img
                            src={Bruschetta}
                            alt="Bruschetta"
                            className="card-image"
                        />
                        <div className="card-body">
                            <h4 className="card-title">Bruschetta</h4>
                            <p className="card-description"></p>
                            <h6 className="card-action">Order a delivery</h6>
                        </div>
                    </article>
                    <article className="card">
                        <img
                            src={LemonDessert}
                            alt="Lemon dessert"
                            className="card-image"
                        />
                        <div className="card-body">
                            <h4 className="card-title">Lemon Dessert</h4>
                            <p className="card-description"></p>
                            <h6 className="card-action">Order a delivery</h6>
                        </div>
                    </article>
                </section>
            </div>
        </section>
    );
}

export default Specials;
