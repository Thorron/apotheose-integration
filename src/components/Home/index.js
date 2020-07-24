//! == Import : npm ==
import React from 'react';

//! == Import : local ==
import CarouselHome from '../CarouselHome';
import './styles.scss';

//! == Composant ==
const Home = () => (
    <main className="home">
        <CarouselHome />
        <div className="home__presentation">
            <h1 className="home__title">
                MESSIEURS CROQUENT
            </h1>
            <div className="home__container">
                <p className="home__description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea fugit quam, adipisci alias sit doloribus tempore distinctio ratione illo nemo atque, ipsam, dolores cupiditate placeat eius repellendus harum sint iure. Sit, officia. Repudiandae deserunt architecto consequatur nulla veritatis voluptatem at tempore eius sint delectus quisquam rem atque blanditiis ullam fuga magni quis sunt earum est nam, tenetur nostrum explicabo alias minima. Placeat, explicabo soluta obcaecati id adipisci, recusandae eveniet reprehenderit molestias ut illum maiores atque odio facilis ex facere alias inventore. Fuga optio placeat similique magnam ut sunt quibusdam repellendus vitae, voluptatem ea doloribus ratione blanditiis aperiam animi odit neque itaque quam nesciunt dolorum aspernatur deleniti! Inventore saepe incidunt corrupti est.
                </p>
                <img className="home__image" src="https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/p960x960/19055885_1791217924523101_5664044721417903390_o.jpg?_nc_cat=104&_nc_sid=dd7718&_nc_ohc=_gVKvrncdyIAX8P1Vu0&_nc_ht=scontent-cdg2-1.xx&_nc_tp=6&oh=c842bb3a7b01d32886daf8352b3c0ee1&oe=5F3E4316" alt=""/>
            </div>
        </div>
        <div className="home__tripadvisor">
            <p>Avis Tripadvisor</p>
        </div>
    </main>
);

//! == Export ==
export default Home;
