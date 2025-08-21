import { Link } from "react-router-dom";

function Nav() {
    return <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/#about'>About</Link></li>
            <li><a href='#'>Menu</a></li>
            <li><a href='#'>Reservations</a></li>
            <li><a href='#'>Order Online</a></li>
            <li><a href='#'>Login</a></li>
        </ul>
    </nav>;
}

export default Nav;
