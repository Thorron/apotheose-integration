//! == Import : npm ==
import React from 'react';
import { Link } from 'react-scroll';

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const Commander = () => (
    <main className="commander">
        <div className="commander__emporter">
            <p className="commander__emporter--text">Pour vos livraisons, voici les liens vers nos partenaires</p>
            <div className="commander__emporter--links">
                <img src="https://i2.wp.com/www.adriasbakery.com/wp-content/uploads/2019/01/uber-eats-logo-png.png" alt="ubereat" className="commander__emporter--link"/>
                <img src="https://img.over-blog-kiwi.com/0/55/35/69/20200209/ob_84bc94_deliveroo-logo-svg.png" alt="deliveroo" className="commander__emporter--link"/>
            </div>
        </div>
        <div className="commander__surplace">
            <div className="commander__surplace--container">
                <p className="commander__surplace--title">Vous pouvez commander en ligne et venir récupérer votre commande dans votre restaurant</p>
                <Link
                    to="triangle"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                >
                    <button className="commander__surplace--button">Commencer</button>
                </Link>
            </div>
        </div>
        <svg id="bigTriangleShadow" class="triangle" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path id="trianglePath1" d="M0 0 L50 100 L100 0 Z"></path>
            <path id="trianglePath2" d="M50 L100 40 L100 0 Z"></path>
        </svg>
        <div className="commander__commande">
            Commandes
        </div>
    </main>
);

//! == Export ==
export default Commander;
