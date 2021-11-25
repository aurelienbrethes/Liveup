import React from 'react';
import logo from './medias/Live_up_1.gif';
import './header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
            <div id="logo"><img src={logo}/></div>
            </Link>
            <ul className="navMenu">
                <Link to="/event">
                    <li>Les Evènements</li>
                </Link>
                <Link to="/addEvent">
                <li>Ajouter un évènement</li>
                </Link>
                <Link to="/account">
                <li>Mon compte</li>
                </Link>
            </ul>
        </div>
    );
};

export default Header;