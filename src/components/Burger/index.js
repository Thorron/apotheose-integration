//! == Import : npm ==
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { HamburgerElastic } from 'react-animated-burgers';

//! == Import : local ==
import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram-sketched.svg';
import tripadvisor from '../../images/tripadvisor.svg';
import './styles.scss';

//! == Composant ==
const Burger = ({ isActive, setIsActive }) => {
    const handleClick = () => {
        console.log(setIsActive);
        if (isActive === false) {
            setIsActive(true);
        }
        if (isActive === true) {
            setIsActive(false);
        }
    };
    return (
        <div className="nav">
            <div className="nav__hamburger">
                <HamburgerElastic
                    isActive={isActive}
                    toggleButton={handleClick}
                    buttonColor="transparent"
                    barColor="white"
                />
            </div>
            <div className={isActive === false ? 'nav__hamburger--close' : 'nav__hamburger--open'}>
                <NavLink
                    to="/"
                    onClick={handleClick}
                    className="navbar__link"
                    activeClassName="navbar__link--selected"
                    exact
                >
                    Accueil
                </NavLink>
                <NavLink
                    to="/menu"
                    onClick={handleClick}
                    className="navbar__link"
                    activeClassName="navbar__link--selected"
                    exact
                >
                    Menu
                </NavLink>
                <NavLink
                    to="/commander"
                    onClick={handleClick}
                    className="navbar__link"
                    activeClassName="navbar__link--selected"
                    exact
                >
                    Commander
                </NavLink>
                <NavLink
                    to="/nous-trouver"
                    onClick={handleClick}
                    className="navbar__link"
                    activeClassName="navbar__link--selected"
                    exact
                >
                    Nous trouver
                </NavLink>
                <div className="nav__socialnetworks">
                    <a className="nav__socialnetwork" target="_blank" href="https://fr-fr.facebook.com/Messieurscroquent/" rel="noopener noreferrer">
                        <img className="socialnetwork" src={facebook} alt="facebook"/>
                    </a>
                    <a className="nav__socialnetwork" target="_blank" href="https://www.instagram.com/messieurscroquent/" rel="noopener noreferrer">
                        <img className="socialnetwork" src={instagram} alt="instagram"/>
                    </a>
                    <a className="nav__socialnetwork" target="_blank" href="https://www.tripadvisor.fr/Restaurant_Review-g187079-d12474378-Reviews-Messieurs_Croquent-Bordeaux_Gironde_Nouvelle_Aquitaine.html" rel="noopener noreferrer">
                        <img className="socialnetwork" src={tripadvisor} alt="tripadvisor"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

Burger.propTypes = {
    isActive: PropTypes.bool.isRequired,
    setIsActive: PropTypes.func.isRequired,
};

//! == Export ==
export default Burger;
