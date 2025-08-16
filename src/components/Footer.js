import Logo from "../assets/FooterLogo.png";

function Footer() {
    return (
        <footer className="bg-gray">
            <div className="container">
                <img src={Logo} alt="Footer logo" />
                <div>
                    <h4>Doormat Navigation</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Reservations</a></li>
                        <li><a href="#">Order Online</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="#">Address</a></li>
                        <li><a href="#">Phone number</a></li>
                        <li><a href="#">Email</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Social Media Links</h4>
                    <ul>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">X</a></li>
                        <li><a href="#">Facebook</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
