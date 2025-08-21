import AboutUs1 from "../assets/about-us-1.jpg";
import AboutUs2 from "../assets/about-us-2.jpg";

function About() {
    return (
        <section id="about" className="about bg-gray">
            <div className="container">
                <div className="description">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Meet our chefs, Mario and Adrian.</p>
                    <p>
                        Mario, originally from Greece, discovered his passion
                        for cooking while helping his mother in the kitchen.
                        Adrian, on the other hand, found his way to the culinary
                        world by chance in his hometown of Michigan.
                    </p>
                    <p>
                        Their shared love for food—Mario’s devotion to feta and
                        Adrian’s fascination with desserts—brought them together
                        at the Culinary Arts University in Naples. It was there
                        that the idea for Little Lemon was born.
                    </p>
                </div>
                <div className="image-cascade">
                    <img src={AboutUs2} alt="Mario and Adrian" id="img-2" />
                    <img src={AboutUs1} alt="Mario and Adrian" id="img-1" />
                </div>
            </div>
        </section>
    );
}

export default About;
