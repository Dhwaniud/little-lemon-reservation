import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Hamburger from '../assets/hamburger.svg';

function Nav() {
    const [open, setOpen] = useState(false);

    return <nav>
        <div className="navbar-hamburger" onClick={() => setOpen(!open)}>
            <img src={Hamburger} alt="Menu" />
        </div>
        <ul className={`navbar-links ${open ? 'active' : ''}`}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/#about'>About</Link></li>
            <li><Link to='/menu'>Menu</Link></li>
            <li><Link to='/reservations'>Reservations</Link></li>
            <li><Link to='/order-online'>Order Online</Link></li>
            <li><Link to='/login'>Login</Link></li>
        </ul>
    </nav>;
}

export default Nav;
