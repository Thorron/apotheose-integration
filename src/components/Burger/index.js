//! == Import : npm ==
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { HamburgerElastic } from 'react-animated-burgers';

//! == Import : local ==
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
