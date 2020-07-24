//! == Import : npm ==
import React from 'react';

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const Footer = () => (
    <footer className="footer">
        <div className="footer__container">
            <form action="" className="footer__form">
                <p className="footer__title">
                    Nous contacter
                </p>
                <div className="footer__name">
                    <input className="footer__form--name" type="text" name="" id="" placeholder="Nom"/>
                    <input className="footer__form--surname" type="text" name="" id="" placeholder="Prénom"/>
                </div>
                <div className="footer__mail">
                    <input className="footer__form--mail" type="email" name="" id="" placeholder="Email"/>
                    <input className="footer__form--phone" type="number" name="" id="" placeholder="Téléphone"/>
                </div>
                <textarea className="footer__form--area" name="" id="" cols="30" rows="10" placeholder="Veuillez saisir votre texte"></textarea>
                <div className="footer__submit">
                    <button className="footer__form--button" type="submit">Envoyer</button>
                </div>
            </form>
            <aside className="footer__aside">
                <div className="footer__horaires">
                    <p className="footer__infos">Horaires :</p>
                    <p className="footer__infos">10:30 à 14:30 - 18:30 à 22:00</p>
                </div>
                <div className="footer__phone">
                    <p className="footer__infos">Téléphone : 05 57 30 91 39</p>
                </div>
                <div className="footer__adresse">
                    <p className="footer__infos">25 Cours Pasteur,</p>
                    <p className="footer__infos">33000 BORDEAUX</p>
                </div>
            </aside>
        </div>
    </footer>
);

//! == Export ==
export default Footer;
