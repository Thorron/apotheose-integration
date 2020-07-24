//! == Import : npm ==
import React from 'react';

//! == Import : local ==
import fries from '../../images/fries.png';
import salad from '../../images/salad.png';
import vegetable from '../../images/vegetable.png';
import coleslaw from '../../images/coleslaw.png';
import cake from '../../images/cake.png';
import milk from '../../images/milk.png';
import './styles.scss';

//! == Composant ==
const Menu = () => (
    <main className="menu">
        <h1 className="menu__title">À LA CARTE</h1>
        <div className="menu__card">
            <div className="menu__card--title">
                NOS CROQUES-MONSIEURS
                <svg version="1.1" id="croc" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 204 117.5">
                    <rect x="0.2" y="0.1" class="st0" width="203.7" height="117.2"/>
                    <ellipse transform="matrix(0.1347 -0.9909 0.9909 0.1347 70.9974 247.2497)" class="st1" cx="177.1" cy="83" rx="22.3" ry="27"/>
                    <ellipse class="st1" cx="136.4" cy="82.3" rx="18.6" ry="15.1"/>
                    <ellipse class="st1" cx="108.8" cy="57.3" rx="33.5" ry="29.4"/>
                    <ellipse class="st1" cx="69.4" cy="33.3" rx="37.1" ry="27.6"/>
                    <path class="st1" d="M57.1,6c0,11.3-11.9,20.5-26.6,20.5S4,17.3,4,6S4.2,3.9,23.3,3C38.9,2.2,57.1-5.3,57.1,6z"/>
                    <rect x="47.7" y="0" class="st1" width="156.2" height="54.6"/>
                    <rect x="122.7" y="30.1" class="st1" width="81.4" height="54.6"/>
                    <rect x="4.2" y="0" class="st1" width="52.5" height="9"/>
                </svg>
            </div>
            <div className="menu__card--contents">
                <div className="menu__card--content">
                    <div className="menu__croque">
                        <p className="menu__croque--title">MONSIEUR CROQUE</p>
                        <p className="menu__croque--price">7&euro;</p>
                    </div>
                    <p className="menu__croque--description">Jambon blanc, béchamel maison, fromage Abondance A.O.P</p>
                    <div className="menu__croque">
                        <p className="menu__croque--title">LE TRANSFORMISTE</p>
                        <p className="menu__croque--price">8&euro;</p>
                    </div>
                    <p className="menu__croque--description">Jambon blanc, béchamel maison, fromage Abondance A.O.P</p>
                    <div className="menu__croque">
                        <p className="menu__croque--title">MONSIEUR SEGUIN</p>
                        <p className="menu__croque--price">8&euro;</p>
                    </div>
                    <p className="menu__croque--description">Jambon blanc, béchamel maison, fromage Abondance A.O.P</p>
                </div>
                <div className="menu__card--content">
                    <div className="menu__croque">
                        <p className="menu__croque--title">COQ MONSIEUR</p>
                        <p className="menu__croque--price">8&euro;</p>
                    </div>
                    <p className="menu__croque--description">Poulet label rouge, béchamel maison, coulis de tomate maison, fromage Abondance A.O.P, compoté d'oignons</p>
                    <div className="menu__croque">
                        <p className="menu__croque--title">MONSIEUR CONFIT</p>
                        <p className="menu__croque--price">8&euro;</p>
                    </div>
                    <p className="menu__croque--description">Poulet label rouge, béchamel maison, coulis de tomate maison, fromage Abondance A.O.P, compoté d'oignons</p>
                    <div className="menu__croque">
                        <p className="menu__croque--title">CROQ MYSTÈRE</p>
                        <p className="menu__croque--price">9&euro;</p>
                    </div>
                    <p className="menu__croque--description">Poulet label rouge, béchamel maison, coulis de tomate maison, fromage Abondance A.O.P, compoté d'oignons</p>
                </div>
            </div>
        </div>

        <div className="menu__container">
            <div className="menu__card menu__card--flex">
                <div className="menu__card--title">
                    NOS ACCOMPAGNEMENTS : 3&euro;
                </div>
                <div className="menu__card--contents">
                    <div className="menu__container--row">
                        <div className="menu__accompagnement">
                            <img className="menu__accompagnement--image" src={fries} alt=""/>
                            <p className="menu__accompagnement--text">FRITES</p>
                        </div>
                        <div className="menu__accompagnement">
                            <img className="menu__accompagnement--image" src={salad} alt=""/>
                            <p className="menu__accompagnement--text">SALADE</p>
                        </div>
                        <div className="menu__accompagnement">
                            <img className="menu__accompagnement--image" src={vegetable} alt=""/>
                            <p className="menu__accompagnement--text">LÉGUMES</p>
                        </div>
                        <div className="menu__accompagnement">
                            <img className="menu__accompagnement--image" src={coleslaw} alt=""/>
                            <p className="menu__accompagnement--text">COLESLAW</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu__card menu__card--flex">
                <div className="menu__card--title">
                    COTÉ SUCRÉ : 4&euro;
                </div>
                <div className="menu__card--contents">
                    <div className="menu__container--column">
                            <div className="menu__sucre">
                                <img className="menu__sucre--image" src={cake} alt=""/>
                                <p className="menu__sucre--text">MADAME TARTE</p>
                                <p className="menu__sucre--description">Tarte du jour</p>
                            </div>
                            <div className="menu__sucre">
                                <img className="menu__sucre--image" src={milk} alt=""/>
                                <p className="menu__sucre--text">FROMAGE BLANC</p>
                                <p className="menu__sucre--description">Coulis: fraise, poire, miel, crême de marrons</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="menu__card">
            <div className="menu__card--title">
                NOS BOISSONS
                <svg version="1.1" id="croc" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 204 117.5">
                    <rect x="0.2" y="0.1" class="st0" width="203.7" height="117.2"/>
                    <ellipse transform="matrix(0.1347 -0.9909 0.9909 0.1347 70.9974 247.2497)" class="st1" cx="177.1" cy="83" rx="22.3" ry="27"/>
                    <ellipse class="st1" cx="136.4" cy="82.3" rx="18.6" ry="15.1"/>
                    <ellipse class="st1" cx="108.8" cy="57.3" rx="33.5" ry="29.4"/>
                    <ellipse class="st1" cx="69.4" cy="33.3" rx="37.1" ry="27.6"/>
                    <path class="st1" d="M57.1,6c0,11.3-11.9,20.5-26.6,20.5S4,17.3,4,6S4.2,3.9,23.3,3C38.9,2.2,57.1-5.3,57.1,6z"/>
                    <rect x="47.7" y="0" class="st1" width="156.2" height="54.6"/>
                    <rect x="122.7" y="30.1" class="st1" width="81.4" height="54.6"/>
                    <rect x="4.2" y="0" class="st1" width="52.5" height="9"/>
                </svg>
            </div>
            <div className="menu__boisson--container">
                <div className="menu__card--contents no-border">
                    <div className="menu__card--content">
                        <p className="menu__boisson">BOISSONS FRAÎCHES</p>
                        <div className="menu__croque">
                            <p className="menu__croque--title">SODA</p>
                            <p className="menu__croque--price">2,00&euro;</p>
                        </div>
                        <div className="menu__croque">
                            <p className="menu__croque--title">BOISSONS ARTISANALES</p>
                            <p className="menu__croque--price">3,50&euro;</p>
                        </div>
                        <div className="menu__croque">
                            <p className="menu__croque--title">EAU MINÉRALE</p>
                            <p className="menu__croque--price">3,60&euro;</p>
                        </div>
                        <div className="menu__croque">
                            <p className="menu__croque--title">BIÈRE BOUTEILLE</p>
                            <p className="menu__croque--price">3,70&euro;</p>
                        </div>
                        <div className="menu__croque">
                            <p className="menu__croque--title">BIÈRE PRESSION</p>
                            <p className="menu__croque--price">6,80&euro;</p>
                        </div>
                    </div>
                    <div className="menu__card--content">
                        <p className="menu__boisson">BOISSONS CHAUDES</p>
                        <div className="menu__croque">
                            <p className="menu__croque--title">EXPRESSO</p>
                            <p className="menu__croque--price">1,70&euro;</p>
                        </div>
                        <div className="menu__croque">
                            <p className="menu__croque--title">CAFÉ LONG</p>
                            <p className="menu__croque--price">2,20&euro;</p>
                        </div>
                        <div className="menu__croque">
                            <p className="menu__croque--title">CAPUCCINO, LATTE MACCHIATO</p>
                            <p className="menu__croque--price">3,20&euro;</p>
                        </div>
                        <div className="menu__croque">
                            <p className="menu__croque--title">THÉS</p>
                            <p className="menu__croque--price">3,20&euro;</p>
                        </div>
                    </div>
                </div>
                <div className="menu__container--vin">
                    <p className="menu__boisson">NOTRE VIN</p>
                    <div className="menu__croque">
                            <p className="menu__croque--title">VERRE</p>
                            <p className="menu__croque--price">3,50&euro;</p>
                    </div>
                    <div className="menu__croque">
                            <p className="menu__croque--title">BOUTEILLE</p>
                            <p className="menu__croque--price">18,00&euro;</p>
                    </div>
                </div>
            </div>
        </div>

        <h1 className="menu__title">NOS MENUS</h1>
        <div className="menu__card">
            <div className="menu__card--title">
                NOS CROQUES-MONSIEURS
            </div>
            <div className="menu__card--contents">
                <div className="menu__card--content">
                    <div className="menu__croque">
                        <p className="menu__croque--title">MONSIEUR CROQUE</p>
                        <p className="menu__croque--price">7&euro;</p>
                    </div>
                    <p className="menu__croque--description">Jambon blanc, béchamel maison, fromage Abondance A.O.P</p>
                    <div className="menu__croque">
                        <p className="menu__croque--title">LE TRANSFORMISTE</p>
                        <p className="menu__croque--price">8&euro;</p>
                    </div>
                    <p className="menu__croque--description">Jambon blanc, béchamel maison, fromage Abondance A.O.P</p>
                    <div className="menu__croque">
                        <p className="menu__croque--title">MONSIEUR SEGUIN</p>
                        <p className="menu__croque--price">8&euro;</p>
                    </div>
                    <p className="menu__croque--description">Jambon blanc, béchamel maison, fromage Abondance A.O.P</p>
                </div>
                <div className="menu__card--content">
                    <div className="menu__croque">
                        <p className="menu__croque--title">COQ MONSIEUR</p>
                        <p className="menu__croque--price">8&euro;</p>
                    </div>
                    <p className="menu__croque--description">Poulet label rouge, béchamel maison, coulis de tomate maison, fromage Abondance A.O.P, compoté d'oignons</p>
                    <div className="menu__croque">
                        <p className="menu__croque--title">MONSIEUR CONFIT</p>
                        <p className="menu__croque--price">8&euro;</p>
                    </div>
                    <p className="menu__croque--description">Poulet label rouge, béchamel maison, coulis de tomate maison, fromage Abondance A.O.P, compoté d'oignons</p>
                    <div className="menu__croque">
                        <p className="menu__croque--title">CROQ MYSTÈRE</p>
                        <p className="menu__croque--price">9&euro;</p>
                    </div>
                    <p className="menu__croque--description">Poulet label rouge, béchamel maison, coulis de tomate maison, fromage Abondance A.O.P, compoté d'oignons</p>
                </div>
            </div>
        </div>

        <div className="menu__container">
            <div className="menu__card menu__card--flex">
                <div className="menu__card--title">
                    NOS ACCOMPAGNEMENTS : 3&euro;
                </div>
                <div className="menu__card--contents">
                    <div className="menu__container--row">
                        <div className="menu__accompagnement">
                            <img className="menu__accompagnement--image" src={fries} alt=""/>
                            <p className="menu__accompagnement--text">FRITES</p>
                        </div>
                        <div className="menu__accompagnement">
                            <img className="menu__accompagnement--image" src={salad} alt=""/>
                            <p className="menu__accompagnement--text">SALADE</p>
                        </div>
                        <div className="menu__accompagnement">
                            <img className="menu__accompagnement--image" src={vegetable} alt=""/>
                            <p className="menu__accompagnement--text">LÉGUMES</p>
                        </div>
                        <div className="menu__accompagnement">
                            <img className="menu__accompagnement--image" src={coleslaw} alt=""/>
                            <p className="menu__accompagnement--text">COLESLAW</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu__card menu__card--flex">
                <div className="menu__card--title">
                    COTÉ SUCRÉ : 4&euro;
                </div>
                <div className="menu__card--contents">
                    <div className="menu__container--column">
                            <div className="menu__sucre">
                                <img className="menu__sucre--image" src={cake} alt=""/>
                                <p className="menu__sucre--text">MADAME TARTE</p>
                                <p className="menu__sucre--description">Tarte du jour</p>
                            </div>
                            <div className="menu__sucre">
                                <img className="menu__sucre--image" src={milk} alt=""/>
                                <p className="menu__sucre--text">FROMAGE BLANC</p>
                                <p className="menu__sucre--description">Coulis: fraise, poire, miel, crême de marrons</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="menu__card">
            <div className="menu__card--title">
                NOS BOISSONS
            </div>
            <div className="menu__boisson--container">
                <div className="menu__card--contents no-border">
                    <div className="menu__card--content">
                        <p className="menu__boisson">BOISSONS FRAÎCHES</p>
                        <div className="menu__croque">
                            <p className="menu__croque--title">SODA</p>
                            <p className="menu__croque--price">2,00&euro;</p>
                        </div>
                        <div className="menu__croque">
                            <p className="menu__croque--title">BOISSONS ARTISANALES</p>
                            <p className="menu__croque--price">3,50&euro;</p>
                        </div>
                        <div className="menu__croque">
                            <p className="menu__croque--title">EAU MINÉRALE</p>
                            <p className="menu__croque--price">3,60&euro;</p>
                        </div>
                        <div className="menu__croque">
                            <p className="menu__croque--title">BIÈRE BOUTEILLE</p>
                            <p className="menu__croque--price">3,70&euro;</p>
                        </div>
                        <div className="menu__croque">
                            <p className="menu__croque--title">BIÈRE PRESSION</p>
                            <p className="menu__croque--price">6,80&euro;</p>
                        </div>
                    </div>
                    <div className="menu__card--content">
                        <p className="menu__boisson">BOISSONS CHAUDES</p>
                        <div className="menu__croque">
                            <p className="menu__croque--title">EXPRESSO</p>
                            <p className="menu__croque--price">1,70&euro;</p>
                        </div>
                        <div className="menu__croque">
                            <p className="menu__croque--title">CAFÉ LONG</p>
                            <p className="menu__croque--price">2,20&euro;</p>
                        </div>
                        <div className="menu__croque">
                            <p className="menu__croque--title">CAPUCCINO, LATTE MACCHIATO</p>
                            <p className="menu__croque--price">3,20&euro;</p>
                        </div>
                        <div className="menu__croque">
                            <p className="menu__croque--title">THÉS</p>
                            <p className="menu__croque--price">3,20&euro;</p>
                        </div>
                    </div>
                </div>
                <div className="menu__container--vin">
                    <p className="menu__boisson">NOTRE VIN</p>
                    <div className="menu__croque">
                            <p className="menu__croque--title">VERRE</p>
                            <p className="menu__croque--price">3,50&euro;</p>
                    </div>
                    <div className="menu__croque">
                            <p className="menu__croque--title">BOUTEILLE</p>
                            <p className="menu__croque--price">18,00&euro;</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
);

//! == Export ==
export default Menu;
