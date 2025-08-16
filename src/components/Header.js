import Logo from "../assets/Logo.svg";
import Nav from "./Nav";

function Header() {
    return (
        <header className="bg-gray">
            <div className="container">
                <img src={Logo} alt="Logo"></img>
                <Nav />
            </div>
        </header>
    );
}

export default Header;
