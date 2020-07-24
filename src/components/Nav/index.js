//! == Import : npm ==
import React from 'react';
import { NavLink } from 'react-router-dom';
import { HamburgerElastic } from 'react-animated-burgers';

//! == Import : local ==
import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram-sketched.svg';
import tripadvisor from '../../images/tripadvisor.svg';
import './styles.scss';

//! == Composant ==
const Nav = () => (
    <nav className="navbar">
        <div className="navbar__toggle">
            <div className="navbar__none"></div>
            <ul className="navbar__list">
                <NavLink
                    to="/"
                    className="navbar__link"
                    activeClassName="navbar__link--selected"
                    exact
                >
                    Accueil
                </NavLink>
                <NavLink
                    to="/menu"
                    className="navbar__link"
                    activeClassName="navbar__link--selected"
                    exact
                >
                    Menu
                </NavLink>
                <NavLink
                    to="/commander"
                    className="navbar__link"
                    activeClassName="navbar__link--selected"
                    exact
                >
                    Commander
                </NavLink>
                <NavLink
                    to="/nous-trouver"
                    className="navbar__link"
                    activeClassName="navbar__link--selected"
                    exact
                >
                    Nous trouver
                </NavLink>
            </ul>
            <div className="navbar__socialnetworks">
                <a className="navbar__socialnetwork" target="_blank" href="https://fr-fr.facebook.com/Messieurscroquent/" rel="noopener noreferrer">
                    <img className="socialnetwork" src={facebook} alt="facebook"/>
                </a>
                <a className="navbar__socialnetwork" target="_blank" href="https://www.instagram.com/messieurscroquent/" rel="noopener noreferrer">
                    <img className="socialnetwork" src={instagram} alt="instagram"/>
                </a>
                <a className="navbar__socialnetwork" target="_blank" href="https://www.tripadvisor.fr/Restaurant_Review-g187079-d12474378-Reviews-Messieurs_Croquent-Bordeaux_Gironde_Nouvelle_Aquitaine.html" rel="noopener noreferrer">
                    <img className="socialnetwork" src={tripadvisor} alt="tripadvisor"/>
                </a>
            </div>
        </div>
        <div className="navbar__hamburger">
            <HamburgerElastic
                isActive={false}
                toggleButton={'handleClick'}
                buttonColor="transparent"
                barColor="white"
            />
        </div>
    </nav>
);

//! == Export ==
export default Nav;
