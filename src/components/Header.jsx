import React from 'react';
import logo from './medias/Live_up_1.gif';
import './header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link activeClassName="active" to="/">
            <div id="logo"><img src={logo}/></div>
            </Link>
            
            <ul className="navMenu">
                <Link activeClassName="active" to="/event">
                    <li>Les Evènements</li>
                </Link>
                <Link activeClassName="active" to="/addEvent">
                <li>Ajouter un évènement</li>
                </Link>
                <Link activeClassName="active" to="/account">
                <li>Mon compte</li>
                </Link>
            </ul>
        </div>
    );
};

export default Header;