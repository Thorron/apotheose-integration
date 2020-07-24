//! == Import : npm ==
import React from 'react';
import { Link } from 'react-scroll';

//! == Import : local ==
import Map from '../Map';
import location from '../../images/location.svg';
import mail from '../../images/mail.svg';
import phone from '../../images/phone.svg';
import clock from '../../images/clock.svg';
import tram from '../../images/tram.svg';
import './styles.scss';

//! == Composant ==
const Find = () => (
    <main className="find">
        <div className="find__container">
            <div className="find__coordonnees">
                <h3 className="find__coordonnees--title">MESSIEURS CROQUENT</h3>
                <div className="find__coordonnees--adresse">
                    <img src={location} alt="" className="find__coordonnees--icon"/>
                    <div className="find__coordonnees--container">
                        <p className="find__coordonnees--text">25 Cours Pasteur,</p>
                        <p className="find__coordonnees--text">33000 BORDEAUX</p>
                    </div>
                </div>
                <div className="find__coordonnees--phone">
                    <img src={phone} alt="" className="find__coordonnees--icon"/>
                    <a href="tel:+33557309139">05 57 30 91 39</a>
                </div>
                <div className="find__coordonnees--mail">
                    <img src={mail} alt="" className="find__coordonnees--icon"/>
                    <Link
                        to="footer"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                    >
                        contact@messieurscroquent.com
                    </Link>
                </div>
                <div className="find__coordonnees--horaires">
                    <img src={clock} alt="" className="find__coordonnees--icon"/>
                    <div className="find__coordonnees--container">
                        <p className="find__coordonnees--text">OUVERT DU LUNDU AU SAMEDI</p>
                        <p className="find__coordonnees--text">10:30 - 14:30 / 18:30 - 22:00</p>
                        <p className="find__coordonnees--text">FERMÉ LE DIMANCHE</p>
                    </div>
                </div>
            </div>
            <div className="find__map">
                <Map />
            </div>
        </div>

        <div className="find__transport">
            <p className="find__transport--title">Venir en transport en commun</p>
            <div className="find__transport--container">
                <img src={tram} alt="tram" className="find__transport--icon"/>
                <p className="find__transport--text">Ligne Tram B - Arrêt Musée d'Aquitaine</p>
            </div>
        </div>

        <div className="find__private">
            <p className="find__private--title">UN ÉVÊNEMENT À ORGANISER ?</p>
            <p className="find__private--title">PRIVATISER LE RESTAURANT ?</p>
            <p className="find__private--text">Contacter nous via le formulaire de contact ci-dessous et racontez-nous votre projet</p>
        </div>
    </main>
);

//! == Export ==
export default Find;
