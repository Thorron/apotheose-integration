//! == Import : npm ==
import React from 'react';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

//! == Import : local ==
import Nav from '../Nav';

import logo from '../../images/logo-brand.png';
import './styles.scss';

//! == Composant ==
const Header = () => (
    <header className="header">
        <div className="header__brand">
            <NavLink
                to="/"
                exact
            >
                <img className="header__image" src={logo} alt="logo"/>
            </NavLink>
        </div>
        <div className="header__infos">
            <div className="header__none"></div>
            <div className="header__status">
                OUVERT
            </div>
            <div className="header__link">
                <Link
                    to="footer"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                >
                    <span className="header__link--contact">Contact </span>
                </Link>
                 -
                <a href="tel:+3357309139"> 05 57 30 91 39</a>
            </div>
        </div>
        <Nav />
    </header>
);

//! == Export ==
export default Header;
