import Logo from "../assets/logo.svg";
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
