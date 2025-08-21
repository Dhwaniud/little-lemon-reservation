import Logo from "../assets/footer-logo.png";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="container">
                <img src={Logo} alt="Footer logo" />
                <div>
                    <h4>Doormat Navigation</h4>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/#about'>About</Link></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Reservations</a></li>
                        <li><a href="#">Order Online</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="https://maps.app.goo.gl/TxXaKWmWTtc1oDpLA" target="_blank">Address</a></li>
                        <li><a href="tel:+1 5056465014">Phone number</a></li>
                        <li><a href="mailto:little-lemon@fakewebsite.com">Email</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Social Media Links</h4>
                    <ul>
                        <li><a href="https://www.instagram.com" target="_blank">Instagram</a></li>
                        <li><a href="https://www.x.com" target="_blank">X</a></li>
                        <li><a href="https://www.facebook.com" target="_blank">Facebook</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
